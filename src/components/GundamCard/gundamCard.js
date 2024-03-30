import './gundamCard.scss';

import { Link, } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'

function GundamCard({item}){
    const [details, setDetails] = useState(null);

    useEffect(() => {
        if (item) { 
            const getDetails = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/gundams/${item.id}`);
                    setDetails(response.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getDetails();
        }
    }, [item]);
    
    if (!details && item) { 
        return <div className='retrieving'>Retrieving Gundam details...</div>; 
    }
    
    if (!item) {
        return null; 
    }

    return(
        
        <div className='card-section'>

            <Link to={`/gundams/${details.id}`} className='card-cont__link' key={details.id}>
                <div className='card-cont'>
                    <p className='user-list__name'>{details.name}</p> 
                    <img src={details.image} alt={details.name} className='card-cont__image' />

                    <div className='user-list__btn-cont'>
                    <button className='user-list__btn'>+ add to wishlist</button>
                    <button className='user-list__btn'>+ bought</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default GundamCard;
