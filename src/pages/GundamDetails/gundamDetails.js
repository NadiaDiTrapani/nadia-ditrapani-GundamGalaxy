import './gundamDetails.scss';
import back from '../../assets/blue-back.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function GundamDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState();
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isOwned, setIsOwned] = useState(false);  // New state variable for owned status
    const navigate = useNavigate();

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/gundams/${id}`);
                setDetails(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        getDetails();
    }, [id]);

    useEffect(() => {
        const checkWishlist = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8080/wishlist/1`);
                let exists = response.data.some(e => e.id.toString() === id);
                setIsInWishlist(exists);
            } catch (err) {
                console.error('Error checking wishlist:', err);
            }
        };
        checkWishlist();
    }, [id]);

    useEffect(() => {
        const checkOwned = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8080/owned/1`);
                let exists = response.data.some(e => e.id.toString() === id);
                setIsOwned(exists);
            } catch (err) {
                console.error('Error checking owned list:', err);
            }
        };
        checkOwned();
    }, [id]);

    const addToWishlist = async () => {
        try {
            const userId = 1; // Hardcoded for demonstration
        
            if (isInWishlist) {
                await axios.delete(`http://localhost:8080/wishlist/${userId}`, {
                    data: { gundam_id: id }
                });
                setIsInWishlist(false);
                console.log('Gundam removed from wishlist successfully');
            } else {
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
    }

    const addToOwned = async () => {
        try {
            const userId = 1; // Hardcoded for demonstration
    
            if (isOwned) {
                await axios.delete(`http://localhost:8080/owned/${id}`, {
                    data: { gundam_id: id, user_id: userId }
                });
                setIsOwned(false);
                console.log('Gundam removed from owned list successfully');
            } else {
                await axios.post('http://localhost:8080/owned/add', {
                    gundam_id: id,
                    user_id: userId
                });
                setIsOwned(true);
                console.log('Gundam added to owned list successfully');
            }
        } catch (err) {
            console.error('Error updating owned list:', err);
            alert('Failed to update owned list');
        }
    };

    if (!details) {
        return <div className='retrieving'>Retrieving Gundams...</div>;
    }

    return (
        <>
            <div className='back-sec'>
                <img src={back} alt='back-button' onClick={() => navigate(-1)} />
            </div>

            <div className='hero'>
                <h2 className='hero__title'>{details.name}</h2>
                <img src={details.image} className='hero__image' alt={details.name} />
                <div className='hero__btn-cont'>
                    <button className={`hero__btn ${isInWishlist ? 'wishlist-added' : ''}`} onClick={addToWishlist}>
                        {isInWishlist ? '- Remove from Wishlist' : '+ Add to Wishlist'}
                    </button>
                    <button className={`hero__btn ${isOwned ? 'bought-added' : ''}`} onClick={addToOwned}>
                        {isOwned ? 'Own' : '+ Mark as Bought'}
                    </button>
                </div>
            </div>

            <div className='info'>
                <div className='info__cont'>
                    <p className='info__title'>Series</p>
                    <p>{details.series}</p>
                </div>
                <div className='info__cont'>
                    <p className='info__title'>Grade</p>
                    <p>{details.grade}</p>
                </div>
                <div className='info__cont'>
                    <p className='info__title'>Brand</p>
                    <p>{details.brand}</p>
                </div>
            </div>

            <div className='instruction'>
                <button className='instruction__btn'>Instructions</button>
            </div>

            <div className='details'>
                <h3 className='details__title'>Product Details</h3>
                <p>{details.description}</p>
            </div>

            <div className='tools'>
                <div className='tools__left'>
                    <h4 className='tools__title'>Basic Tools</h4>
                    <p className='tools__text'>Plastic Nipper</p>
                    <p className='tools__text'>Panel Liner</p>
                    <p className='tools__text'>Finishing: Top Coat/Super Clear</p>
                </div>
                <div className='tools__right'>
                    <h4 className='tools__title'>Instructions</h4>
                    <p className='tools__text'>You don't need cement</p>
                    <p className='tools__text'>You don't need paint</p>
                    <p className='tools__text'>Recommended for 15 years & up</p>
                </div>
            </div>
        </>
    );
}

export default GundamDetails;
