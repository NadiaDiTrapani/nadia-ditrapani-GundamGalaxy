import './gundamDetails.scss';
import back from '../../assets/blue-back.svg'

import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'

function GundamDetails(){
    const { id } = useParams();
    const [details, setDetails] = useState();

    useEffect(()=> {
        const getDetails = async() =>{
            try {
                const response = await axios.get(`http://localhost:8080/gundams/${id}`);
                setDetails(response.data)
            }catch (err){
                console.log(err)
            }
        }
        getDetails()
    }, [id])
    
    if (!details){
        return <div className='retriving'>Retriving Gundams...</div>
    }

    // console.log(details.name)

    return(
        <>
        <div className='back-sec'>
            <Link to={'/'}>
                <img src={back} alt='back-button'/>
            </Link>
        </div>

        <div className='hero'>
        <h2 className='hero__title'>{details.name}</h2>
        <img src={details.image} className='hero__image'/>
        </div>

        <div className='info'>
            <div className='info__cont'>
                <p className='info__title'>Series</p>
                <p>{details.series}</p>
            </div>

            <div className='info__cont'>
                <p className='info__title'>Grade</p>
                <p>{details.grade}</p>
            </div>

            <div className='info__cont'>
                <p className='info__title'>Brand</p>
                <p>{details.brand}</p>
            </div>
        </div>

        <div className='instruction'>
            <button className='instruction__btn'>Instructions</button>
        </div>

        <div className='details'>
            <h3 className='details__title'>Product Details</h3>
            <p>{details.description}</p>
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