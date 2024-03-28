import UserWishlist from '../UserWishlist/userWishlist';
import './userSubNav.scss';

function UserSubNav(){
    return(
        <div className='user-sub'>
            <h1 className='user-sub__title'>Welcome Amuro!</h1>
            
            <div className='user-sub__btn-container'>
                <button className='user-sub__btn'>Wish List</button>
                <button className='user-sub__btn'>My Gundams</button>
            </div>

            <UserWishlist />
        </div>
        
    )
}

export default UserSubNav;