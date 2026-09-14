import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { CarOffer } from './components/CarOffer'
function App() {
 
  const carMarket = [
    {id:1, title: 'Audi A5 Limosuine S-Line', price: 75000, fuel: 'Benzyna', year: 2018, przebieg: 74999},
    {id:2, title: 'Mercdes CLA', price:137000, fuel: 'Diesel', year: 2022, przebieg: 183523}

  ]

  return (
    <>
     <header>OtoMoto</header>
     <main>
        {carMarket.map((car) => (
          <CarOffer key={car.id} title={car.title} price={car.price} fuel={car.fuel} year={car.year} przebieg={car.przebieg} />
        ))}
     </main>
    </>
  )
}

export default App
