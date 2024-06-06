import './gundamCard.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GundamCard({ item }) {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isBought, setIsBought] = useState(false);

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
        const checkWishlist = async () => {
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

    useEffect(() => {
        const checkBought = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8080/owned/1`);
                let exists = response.data.some(e => e.id === item.id);
                setIsBought(exists);
            } catch (err) {
                console.error('Error checking bought list:', err);
            }
        };
        checkBought();
    }, [item]);

    const addToWishlist = async () => {
        try {
            const userId = 1; // Hardcoded for demonstration
        
            if (isInWishlist) {
                await axios.delete(`http://localhost:8080/wishlist/${userId}`, {
                    data: { gundam_id: item.id }
                });
                setIsInWishlist(false);
                console.log('Gundam removed from wishlist successfully');
            } else {
                await axios.post('http://localhost:8080/wishlist/add', {
                    gundam_id: item.id,
                    user_id: userId
                });
                setIsInWishlist(true);
                console.log('Gundam added to wishlist successfully');
            }
        } catch (err) {
            console.error('Error updating wishlist:', err);
            alert('Failed to update wishlist');
        }
    }

    const markAsBought = async () => {
        try {
            const userId = 1; // Hardcoded for demonstration

            if (isBought) {
                await axios.delete(`http://localhost:8080/owned/${item.id}`, {
                    data: { gundam_id: item.id, user_id: userId }
                });
                setIsBought(false);
                console.log('Gundam removed from bought list successfully');
            } else {
                await axios.post(`http://localhost:8080/owned/add`, {
                    gundam_id: item.id,
                    user_id: userId
                });
                setIsBought(true);
                console.log('Gundam added to bought list successfully');
            }
        } catch (err) {
            console.error('Error updating bought status:', err);
            alert('Failed to update bought status');
        }
    };

    if (!details && item) {
        return <div className='retrieving'>Retrieving Gundam details...</div>;
    }

    if (!item) {
        return null;
    }

    return (
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
                <button className={`hero__btn ${isBought ? 'bought-added' : ''}`} onClick={markAsBought}>
                    {isBought ? 'Own' : '+ Mark as Bought'}
                </button>
            </div>
        </div>
    );
}

export default GundamCard;
