import { useState } from 'react';
import './userSubNav.scss';
import UserWishlist from '../UserWishlist/userWishlist';
import UserOwned from '../UserOwned/userOwned';

function UserSubNav() {
    const [selectedSection, setSelectedSection] = useState('wishlist'); 

    return (
        <div className='user-sub'>
            <h1 className='user-sub__title'>Welcome Amuro!</h1>
            <div className='user-sub__btn-container'>
                <button className={`user-sub__btn ${selectedSection === 'wishlist' ? 'active' : ''}`} onClick={() => setSelectedSection('wishlist')}>
                    Wish List
                </button>
                <button className={`user-sub__btn ${selectedSection === 'owned' ? 'active' : ''}`} onClick={() => setSelectedSection('owned')}>
                    My Gundams
                </button>
            </div>
            {selectedSection === 'wishlist' ? <UserWishlist /> : <UserOwned />}
        </div>
    );
}

export default UserSubNav;