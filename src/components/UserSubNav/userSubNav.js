import './userSubNav.scss';
import UserWishlist from '../UserWishlist/userWishlist';
import UserOwned from '../UserOwned/userOwned';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function UserSubNav() {
    const { id } = useParams();
    const location = useLocation();
    const [details, setDetails] = useState(null);
    const [selectedSection, setSelectedSection] = useState('wishlist');

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/users/1`);
                setDetails(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        getDetails();
    }, [id]);

    useEffect(() => {
        const path = location.pathname;
        if (path.includes('wishlist')) {
            setSelectedSection('wishlist');
        } else if (path.includes('mygundams')) {
            setSelectedSection('owned');
        }
    }, [location]);

    if (!details) {
        return <div className='retrieving'>Retrieving Gundams...</div>;
    }

    return (
        <div className='user-sub'>
            <h1 className='user-sub__title'>Welcome Amuro!</h1>
            <div className='user-sub__btn-container'>
                <Link
                    to={`/user/${id}/wishlist`}
                    className={`user-sub__btn ${selectedSection === 'wishlist' ? 'active' : ''}`}
                    onClick={() => setSelectedSection('wishlist')}>
                    Wish List
                </Link>
                
                <Link
                    to={`/user/${id}/mygundams`}
                    className={`user-sub__btn ${selectedSection === 'owned' ? 'active' : ''}`}
                    onClick={() => setSelectedSection('owned')}>
                    My Gundams
                </Link>
            </div>
            {selectedSection === 'wishlist' ? <UserWishlist /> : <UserOwned />}
        </div>
    );
}

export default UserSubNav;