import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Lists } from './components/Lists'
import 'bootstrap/dist/css/bootstrap.css'
import { Route,Routes,Link,BrowserRouter } from 'react-router-dom'
import { AddNewOffer } from './components/AddNewOffer'


function App() {
  return (
    <>
     <BrowserRouter>
        <header>Job Board</header>
        <nav>
          <Link to={'/'}>Strona główna</Link>
          <Link to={'/add'}>Dodaj oferte</Link>
        </nav>
          <main>
            <Routes>
              <Route path='/' element={<Lists />}/>
              <Route path='add' element={<AddNewOffer />}/>
            </Routes>
          </main>
     </BrowserRouter>
    </>
  )
}

export default App
