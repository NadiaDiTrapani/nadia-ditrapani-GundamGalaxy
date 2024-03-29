import './userOwned.scss'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function UserOwned(){
    const { id } = useParams()
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const getDetails = async() =>{
            try {
                const response = await axios.get(`http://localhost:8080/owned/1`);
                setDetails(response.data)
            }catch (err){
                console.log(err)
            }
        }
        getDetails()
    }, [id])
    
    if (!details){
        return <div className='retrieving'>Retrieving Gundams...</div>
    }

    const inProgressGundams = details.filter(item => item.isInProgress);
    const completedGundams = details.filter(item => item.isCompleted);
    const otherGundams = details.filter(item => !item.isInProgress && !item.isCompleted);

    return (
        <div className='user-list'>
            <h2 className='user-list__subtitle--owned'>My Gundams</h2>

            <div className='section'>
                {otherGundams.map(item => (
                    <Link to={`/gundams/${item.id}`} key={item.id} className='card-cont__link'>
                        <div>
                            <img src={item.image} className='user-list__image' alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='section'>
                <h3 className='section__title'>In Progress</h3>
                {inProgressGundams.map(item => (
                    <Link to={`/gundams/${item.id}`} key={item.id} className='card-cont__link'>
                        <div>
                            <img src={item.image} className='user-list__image' alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='section'>
                <h3 className='section__title'>Completed</h3>
                {completedGundams.map(item => (
                    <Link to={`/gundams/${item.id}`} key={item.id} className='card-cont__link'>
                        <div>
                            <img src={item.image} className='user-list__image' alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UserOwned;