import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CotizarList } from './pages/CotizarList';
import { CreateCotizar } from './pages/CreateCotizar';
import React from 'react';

//import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<CotizarList/>}/>'
          <Route path='/create' element={<CreateCotizar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

