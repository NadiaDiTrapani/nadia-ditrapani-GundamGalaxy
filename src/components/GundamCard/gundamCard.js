import './gundamCard.scss';

import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'

function GundamCard(){

    const {id} = useParams();
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
                return <div className='card-cont' key={gundam.id}>
                <img src={gundam.image} alt={gundam.name} className='card-cont__image'/>
                <p className='card-cont__title'>{gundam.name}</p>
                </div>
            })}
            
            </>
        </div>
    )
}

export default GundamCard;