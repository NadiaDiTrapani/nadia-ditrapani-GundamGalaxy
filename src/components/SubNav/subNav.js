import './subNav.scss';
import search from '../../assets/search-white.png'

import axios from 'axios'
import { useEffect, useState } from 'react'
import GundamCard from '../GundamCard/gundamCard';

function SubNav(){
    const [details, setDetails] = useState();
    const [filter, setFilter] = useState('All')

    useEffect(()=> {
        const getDetails = async() =>{
            try {
                const response = await axios.get(`http://localhost:8080/gundams/`);
                setDetails(response.data)
            }catch (err){
                console.log(err)
            }
        }
        getDetails()
    }, [])
    
    if (!details){
        return <div className='retriving'>Retriving Gundams...</div>
    }

    function handleFilterChange(newFilter) {
        setFilter(newFilter);
    }

    const filterData = (data) => {
        if (filter === 'All'){
            return data;
        } else{
            return data.filter(item => item.grade === filter)
        }
    };

    const filteredData = filterData(details || [])

    return(
        <>
            <div className='welcome'>
                <h1>Welcome Amuro!</h1>
            </div>

            <nav className='nav-bar'>
                <button className='nav-bar__search'><img src={search} alt='search icon'/></button>

                <div className='nav-bar__btn-container'>
                    <button className={`nav-bar__buttons ${filter === 'All' ? 'active' : ''}`} onClick={() => handleFilterChange('All')}>All</button>
                    <button className={`nav-bar__buttons ${filter === 'High Grade' ? 'active' : ''}`} onClick={() => handleFilterChange('High Grade')}>High Grade</button>
                    <button className={`nav-bar__buttons ${filter === 'SD Gundam' ? 'active' : ''}`} onClick={() => handleFilterChange('SD Gundam')}>SD Gundam</button>
                    <button className={`nav-bar__buttons ${filter === 'Master Grade' ? 'active' : ''}`} onClick={() => handleFilterChange('Master Grade')}>Master Grade</button>
                    <button className={`nav-bar__buttons ${filter === 'Real Grade' ? 'active' : ''}`} onClick={() => handleFilterChange('Real Grade')}>Real Grade</button>
                    <button className={`nav-bar__buttons ${filter === 'Perfect Grade' ? 'active' : ''}`} onClick={() => handleFilterChange('Perfect Grade')}>Perfect Grade</button>
                </div>

                {filteredData.map(item => (
                    <div key={item.id}>
                        <GundamCard item={item} /> 
                    </div>
                ))}
            </nav>
        </>
    )
}

export default SubNav;