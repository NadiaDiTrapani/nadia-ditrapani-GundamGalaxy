import './subNav.scss';
import search from '../../assets/search-white.png'

function SubNav(){
    return(
        <>
            <div className='welcome'>
                <h1>Welcome!</h1>
            </div>

            <nav className='nav-bar'>
                <button className='nav-bar__search'><img src={search} alt='search icon'/></button>

                <div className='nav-bar__btn-container'>
                    <button className='nav-bar__buttons'>SD Gundam</button>
                    <button className='nav-bar__buttons'>Real Grade</button>
                    <button className='nav-bar__buttons'>High Grade</button>
                    <button className='nav-bar__buttons'>Master Grade</button>
                    <button className='nav-bar__buttons'>Perfect Grade</button>
                    <button className='nav-bar__buttons'>All</button>
                </div>

                
            </nav>


        </>
    )
}

export default SubNav;