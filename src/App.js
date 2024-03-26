import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import CatalogPage from './pages/CatalogPage/catalogPage';
import Header from './components/Header/header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<CatalogPage />}/>
          <Route path='/gundam' element={<CatalogPage />}/>
          <Route path='/gundam/:id' element={<CatalogPage />}/>

          <Route path='*' element={<Navigate to='/'/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
