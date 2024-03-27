import './gundamCard.scss';
import pic from '../../assets/test picture.jpg'

function GundamCard(){
    return(
        <div className='card-section'>
            <div className='card-cont'>
            <img src={pic} alt='not a real gundam!' className='card-cont__image'/>
            <p className='card-cont__title'>MG GAT-X105 AILE STRIKE GUNDAM VER.RM</p>
            </div>

            <div className='card-cont'>
            <img src={pic} alt='not a real gundam!' className='card-cont__image'/>
            <p className='card-cont__title'>MG GAT-X105 AILE STRIKE GUNDAM VER.RM</p>
            </div>

        </div>
    )
}

export default GundamCard;