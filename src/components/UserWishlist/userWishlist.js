import './userWishlist.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function UserWishlist(){
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/wishlist/1`);
                setDetails(response.data);     
            } catch (err) {
                console.log(err);
            }
        };
        getDetails();
    }, [id]);

    const removeFromWishlist = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8080/wishlist/${itemId}`);
            console.log('Item removed from wishlist successfully');
            // After removing, fetch the updated wishlist
            const response = await axios.get(`http://localhost:8080/wishlist/${id}`);
            setDetails(response.data);
        } catch (err) {
            console.error('Error removing item from wishlist:', err);
        }
    };

    const addToOwned = async (itemId) => {
        try {
            // Send a POST request to add the gundam to the owned list
            await axios.post(`http://localhost:8080/owned`, { gundam_id: itemId, user_id: id });
            console.log('Item added to owned list successfully');
            // After adding, fetch the updated wishlist
            const response = await axios.get(`http://localhost:8080/wishlist/1`);
            setDetails(response.data);
        } catch (err) {
            console.error('Error adding item to owned list:', err);
        }
    };

    if (!details){
        return <div className='retrieving'>Retrieving Gundams...</div>;
    }

    return(
        <div className='user-list'>
            <h2 className='user-list__subtitle'>My Wishlist</h2>
            
            {details.map(item => (
                <div key={item.id} className='card-cont__link'>
                    <Link to={`/gundams/${item.id}`} className='user-list__link'>
                        <p className='user-list__name'>{item.name}</p> 
                        <img src={item.image} className='user-list__image'/> 
                    </Link>

                    <div className='user-list__btn-cont'>
                        <button className='user-list__btn' onClick={() => removeFromWishlist(item.id)}>
                            - Remove from Wishlist
                        </button>
                        <button className='user-list__btn' onClick={() => addToOwned(item.id)}>
                            + bought
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserWishlist;
