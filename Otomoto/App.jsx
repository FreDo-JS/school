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
   const [carMarket, setCarMarket] = useState([
    { id: 1, marka: "Audi", title: "Audi A5 Limosuine S-Line", price: 75000, fuel: "Benzyna", year: 2018, przebieg: 74999 },
    { id: 2, marka: "Mercedes", title: "Mercdes CLA", price: 137000, fuel: "Diesel", year: 2022, przebieg: 183523 },
    { id: 3, marka: "BMW", title: "BMW Seria 3 M-Pakiet", price: 115000, fuel: "Benzyna", year: 2020, przebieg: 65000 },
    { id: 4, marka: "Volkswagen", title: "Volkswagen Golf GTI", price: 89000, fuel: "Benzyna", year: 2019, przebieg: 82000 },
    { id: 5, marka: "Toyota", title: "Toyota Corolla Hybrid", price: 92000, fuel: "Hybryda", year: 2021, przebieg: 45000 },
    { id: 6, marka: "Skoda", title: "Skoda Octavia Combi", price: 68000, fuel: "Diesel", year: 2017, przebieg: 154000 },
    { id: 7, marka: "Volvo", title: "Volvo XC60 Inscription", price: 145000, fuel: "Diesel", year: 2021, przebieg: 98000 },
    { id: 8, marka: "Ford", title: "Ford Focus ST-Line", price: 59000, fuel: "Benzyna", year: 2018, przebieg: 112000 },
    { id: 9, marka: "Kia", title: "Kia Ceed L", price: 73000, fuel: "Benzyna", year: 2022, przebieg: 34000 },
    { id: 10, marka: "Hyundai", title: "Hyundai Tucson Smart", price: 105000, fuel: "Hybryda", year: 2023, przebieg: 21000 },
    { id: 11, marka: "Nissan", title: "Nissan Qashqai Tekna", price: 84000, fuel: "Benzyna", year: 2020, przebieg: 60000 },
    { id: 12, marka: "Tesla", title: "Tesla Model 3 Long Range", price: 165000, fuel: "Elektryczny", year: 2022, przebieg: 40000 }
  ]);
  return (
    <>
   
     <header>OtoMoto</header>
     <nav>
      <Link to={'/'} >Strona Główna</Link>
      <Link to={'/add'}>Dodaj oferte</Link>
     </nav>
      <Routes>
        <Route path='/'   element={<Starting carMarket={carMarket} setCarMarket={setCarMarket}/>} />
        <Route path='/add' element={<AddNewCar carMarket={carMarket} setCarMarket={setCarMarket}/>} />
      </Routes>
    
    </>
    
  )
}

export default App
