import './gundamCard.scss';

import { Link, } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function GundamCard({item}){
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);


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

    useEffect(() => {
        const checkWishlist = async() => {
            try {
                const response = await axios.get(`http://127.0.0.1:8080/wishlist/1`);
                let exists = response.data.some(e => e.id === item.id);
                setIsInWishlist(exists);
            } catch (err) {
                console.error('Error checking wishlist:', err);
            }
        };
        checkWishlist();
    }, [item]);

    const addToWishlist = async () => {
        try {
            const userId = 1; // Hardcoded for demonstration
    
            if (isInWishlist) {
                // If the item is already in the wishlist, remove it
                await axios.delete(`http://localhost:8080/wishlist/${id}`, {
                    data: { gundam_id: id, user_id: userId }
                });
                setIsInWishlist(false);
                console.log('Gundam removed from wishlist successfully');
            } else {
                // If the item is not in the wishlist, add it
                await axios.post('http://localhost:8080/wishlist/add', {
                    gundam_id: id,
                    user_id: userId
                });
                setIsInWishlist(true);
                console.log('Gundam added to wishlist successfully');
            }
        } catch (err) {
            console.error('Error updating wishlist:', err);
            alert('Failed to update wishlist');
        }
    };
    
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
                    </div>
            </Link>

            <div className='user-list__btn-cont'>
            <button className={`hero__btn ${isInWishlist ? 'wishlist-added' : ''}`} onClick={addToWishlist}>
                        {isInWishlist ? '- Remove from Wishlist' : '+ Add to Wishlist'}
                    </button>
                <button className='user-list__btn'>+ bought</button>
            </div>
        </div>
    )
}

export default GundamCard;
