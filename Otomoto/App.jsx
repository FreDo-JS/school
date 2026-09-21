import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { CarOffer } from './components/CarOffer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Starting } from './components/Starting'
function App() {
  
  return (
    <>
   
     <header>OtoMoto</header>
      <Routes>
        <Route path='/' element={<Starting />} />
      </Routes>
    
    </>
    
  )
}

export default App
