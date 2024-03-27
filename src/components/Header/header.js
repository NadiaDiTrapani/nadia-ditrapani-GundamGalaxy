import './header.scss';
import logo from '../../assets/logo.svg'

import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
        <div className='header__logo-container'>
            <NavLink to={'/'} className='header__logo'>
                <img src={logo} alt='Gundam Galaxy logo' />
            </NavLink>
        </div>

        <ul className='header__container'>
            <li>
                <NavLink to={'/'} className='header__links'>
                    Catalog
                </NavLink>
            </li>
            <li>
                <NavLink to={'/user'} className='header__links'>
                    Profile
                </NavLink>
            </li>
        </ul>
    </header>
    )
}

export default Header;