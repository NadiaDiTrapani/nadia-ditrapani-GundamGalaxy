import './gundamCard.scss';

import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'

function GundamCard(){
    const { id } = useParams();
    const [details, setDetails] = useState();

    useEffect(()=> {
        const getDetails = async() =>{
            try {
                const response = await axios.get(`http://localhost:8080/gundams/`);
                setDetails(response.data)
            }catch (err){
                console.log(err)
            }
        }
        getDetails()
    }, [id])
    
    if (!details){
        return <div className='retriving'>Retriving Gundams...</div>
    }

    const filteredGundam = details.filter((gundam)=>{
        return gundam.id !== details.id
    })

    return(
        
        <div className='card-section'>
            <>
            {filteredGundam.map((gundam)=>{
                return <Link to={`/gundams/${gundam.id}`} className='card-cont__link' key={gundam.id}>
                <div className='card-cont'>
                <img src={gundam.image} alt={gundam.name} className='card-cont__image'/>
                <p className='card-cont__title'>{gundam.name}</p>
                </div>
                </Link>
            })}
            
            </>
        </div>
    )
}

export default GundamCard;