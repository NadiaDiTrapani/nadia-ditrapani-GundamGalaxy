import './gundamDetails.scss';
import pic from '../../assets/test picture.jpg'
import back from '../../assets/blue-back.svg'
import { Link } from 'react-router-dom';

function GundamDetails(){
    return(
        <>
        <div className='back-sec'>
            <Link to={'/'}>
                <img src={back} alt='back-button'/>
            </Link>
        </div>

        <div className='hero'>
        <h2 className='hero__title'>Name of Gundam</h2>
        <img src={pic} className='hero__image'/>
        </div>

        <div className='info'>
            <p className='info__title'>Series</p>
            <p>series</p>

            <p className='info__title'>Grade</p>
            <p>grade</p>

            <p className='info__title'>Brand</p>
            <p>brand</p>
        </div>

        <div className='instruction'>
            <button className='instruction__btn'>Instructions</button>
        </div>

        <div className='details'>
            <h3 className='details__title'>Product Details</h3>
            <p>Muffin cookie chocolate cake shortbread croissant icing. Sweet roll liquorice jujubes pastry powder croissant. Liquorice dragée icing croissant sweet roll. Cookie caramels oat cake gummi bears candy cupcake.</p>
        </div>

        <div className='tools'>
            <div className='tools__left'>
            <h4 className='tools__title'>Basic Tools</h4>
            <p className='tools__text'>Plastic Nipper</p>
            <p className='tools__text'>Panel Liner</p>
            <p className='tools__text'>Finishing: Top Coat/Super Clear</p>
            </div>
            <div className='tools__right'>
            <h4 className='tools__title'>Instructions</h4>
            <p className='tools__text'>You don't need cement</p>
            <p className='tools__text'>You don't need paint</p>
            <p className='tools__text'>Recommended for 15 years & up</p>
            </div>
        </div>
        </>
    )
}

export default GundamDetails;