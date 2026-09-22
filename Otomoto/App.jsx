import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { CarOffer } from './components/CarOffer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Starting } from './components/Starting'
import { AddNewCar } from './components/AddNewCar'
function App() {
  
  return (
    <>
   
     <header>OtoMoto</header>
     <nav>
      <Link to={'/'}>Strona Główna</Link>
      <Link to={'/add'}>Dodaj oferte</Link>
     </nav>
      <Routes>
        <Route path='/' element={<Starting />} />
        <Route path='/add' element={<AddNewCar />} />
      </Routes>
    
    </>
    
  )
}

export default App
