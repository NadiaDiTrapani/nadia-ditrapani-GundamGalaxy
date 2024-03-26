import './header.scss';
import logo from '../../assets/logo.svg'

import { NavLink , useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';


function Header(){
    const location = useLocation();
    const [selected, setSelected] = useState(false);
    
    useEffect(() => {
        setSelected(location.pathname === '/gundams' || location.pathname === '/');
    }, [location]);
    
    const handleLogoClick = () => {
        setSelected(true);
    };

    return(
        <header className='header'>
        <div className='header__logo-container'>
            <NavLink to={'/'} 
            onClick={handleLogoClick} 
            className={`header__logo ${selected ? "active" : ""}`}>
                <img src={logo} alt='Gundam Galaxy logo' />
            </NavLink>
        </div>

        <ul className='header__container'>
            <li>
                <NavLink to={'/'} 
                className={selected ? "active" : ""} 
                onClick={() => setSelected(true)}>
                    <p className='header__links'>Catalog</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/user'} 
                className={!selected ? "active" : ""} 
                onClick={() => setSelected(false)}>
                    <p className='header__links'>User</p>
                </NavLink>
            </li>
        </ul>
    </header>
    )
}

export default Header;