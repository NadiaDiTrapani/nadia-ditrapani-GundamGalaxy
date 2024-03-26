import './header.scss';
import star from '../../assets/starLogo.svg'
import profile from '../../assets/profile.svg'
import logo from '../../assets/logo.svg'

import { NavLink} from 'react-router-dom';


function Header(){

    return(
    <header className='header'>
        <div className='header__logo-container'>  
            <NavLink to={'/'}>
                <img src={logo} alt='Gundam Galaxy logo' className='header__logo'/>
            </NavLink>
        </div>      

        <ul className='header__container'>
            <li>
                <NavLink to={'/'}> <p className='header__links'>Catalog</p>
                    {/* <img src={star} alt='star logo' className='header__icons'/> */}
                </NavLink>
            </li>

            
                
                
            <li>
                <NavLink to={'/user'}> <p className='header__links'>User</p>
                    {/* <img src={profile} alt='profile logo' className='header__icons'/> */}
                </NavLink>
            </li>
        </ul>
    </header>
    )
}

export default Header;