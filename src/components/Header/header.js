import './header.scss';
import star from '../../assets/starLogo.png'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'

function Header(){
    return(
        <>
        <div className='container'>
            <ul>
            <li><img src={star} alt='star logo'/></li>
            <li><img src={logo} alt='Gundam Galaxy logo'/></li>
            <li><img src={profile} alt='profile logo'/></li>
            </ul>
        </div>
        </>
    )
}

export default Header;