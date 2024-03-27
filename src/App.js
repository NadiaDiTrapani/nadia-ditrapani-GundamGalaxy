import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import CatalogPage from './pages/CatalogPage/catalogPage';
import Header from './components/Header/header';
import UserPage from './pages/UserPage/userPage';
import Footer from './components/Footer/footer';
import GundamDetails from './pages/GundamDetailsPage/gundamDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<CatalogPage />}/>
            <Route path='/gundams' element={<CatalogPage />}/>
            <Route path='/gundams/:id' element={<GundamDetails />}/>
            <Route path='/user' element={<UserPage />}/>
            <Route path='/user/:id' element={<UserPage />}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        <Footer />  
      </BrowserRouter>

    </div>
  );
}

export default App;
