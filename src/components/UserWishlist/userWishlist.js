import './userWishlist.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function UserWishlist() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [ownedItems, setOwnedItems] = useState({}); // Object to manage "bought" status

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
            const userId = 1; // Assuming user_id is 1 for demonstration
            await axios.delete(`http://localhost:8080/wishlist/${userId}`, {
                data: { gundam_id: itemId }
            });
            console.log('Item removed from wishlist successfully');
            // After removing, fetch the updated wishlist
            const response = await axios.get(`http://localhost:8080/wishlist/${userId}`);
            setDetails(response.data);
        } catch (err) {
            console.error('Error removing item from wishlist:', err);
        }
    };

    const addToOwn = async (itemId) => {
        try {
            const userId = 1; // Hardcoded for demonstration

            if (ownedItems[itemId]) {
                await axios.delete(`http://localhost:8080/owned/${id}`, {
                    data: { gundam_id: itemId, user_id: userId }
                });
                setOwnedItems(prev => ({ ...prev, [itemId]: false }));
                console.log('Gundam removed from owned list successfully');
            } else {
                await axios.post('http://localhost:8080/owned/add', {
                    gundam_id: itemId,
                    user_id: userId
                });
                setOwnedItems(prev => ({ ...prev, [itemId]: true }));
                console.log('Gundam added to owned list successfully');
            }
        } catch (err) {
            console.error('Error updating owned list:', err);
            alert('Failed to update owned list');
        }
    };

    useEffect(() => {
        const checkOwned = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8080/owned/1`);
                const ownedStatus = response.data.reduce((acc, item) => {
                    acc[item.id] = true;
                    return acc;
                }, {});
                setOwnedItems(ownedStatus);
            } catch (err) {
                console.error('Error checking owned list:', err);
            }
        };
        checkOwned();
    }, [id]);

    if (!details) {
        return <div className='retrieving'>Retrieving Gundams...</div>;
    }

    return (
        <div className='user-list'>
            <h2 className='user-list__subtitle'>My Wishlist</h2>

            {details.map(item => (
                <div key={item.id} className='card-cont__link'>
                    <Link to={`/gundams/${item.id}`} className='user-list__link'>
                        <p className='user-list__name'>{item.name}</p>
                        <img src={item.image} className='user-list__image' alt='gundam'/>
                    </Link>

                    <div className='user-list__btn-cont'>
                        <button className='user-list__btn' onClick={() => removeFromWishlist(item.id)}>
                            - Remove from Wishlist
                        </button>
                        <button
                            className={`user-list__btn ${ownedItems[item.id] ? 'bought-added' : ''}`}
                            onClick={() => addToOwn(item.id)}
                        >
                            + bought
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserWishlist;
