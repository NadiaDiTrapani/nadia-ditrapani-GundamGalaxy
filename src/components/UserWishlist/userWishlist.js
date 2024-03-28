import './userWishlist.scss';

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UserWishlist(){
    const { id } = useParams()
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const getDetails = async() =>{
            try {
                const response = await axios.get(`http://localhost:8080/wishlist/1`);
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

    return(
        <div className='user-list'>
            <h2 className='user-list__subtitle'>My Wishlist</h2>

            {details.map(item => (
                <div key={item.id}>
                    <img src={item.image} className='user-list__image'/> 
                    <p>{item.name}</p> 
                </div>
            ))}
        </div>
    )
}

export default UserWishlist;