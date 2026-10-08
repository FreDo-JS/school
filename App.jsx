import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  const [wzrost, setWzrost] = useState('')
  const [waga, setWaga] = useState('')
  const [wiek, setWiek] = useState('')

  const [plec, setPlec] = useState('mezczyzna')
  const [aktywnosc, setAktywnosc] = useState('1.4')
  const [redukcja, setRedukcja] = useState(false)

  const [kalorie, setKalorie] = useState(null)

  function CalcCalories(e){
    e.preventDefault()

    let bmr

    if(plec === 'mezczyzna'){
      bmr = 10 * waga + 6.25 * wzrost + 5 * wiek + 5
    }
    else
    {
       bmr = 10 * waga + 6.25 * wzrost + 5 * wiek - 161
    }

    let wynik = bmr * Number(aktywnosc)

    if(redukcja){
      wynik = wynik - 300
    }
      setKalorie(`Twoje zapotrzebowanie wynosi: ${Math.round(wynik)} kalorii`)
  }

  return (
    <>
    <main>
      <form action="" onSubmit={CalcCalories}>
      <input type="number" placeholder='Podaj wzrost..'
      value={wzrost}
      onChange={(e) => setWzrost(e.target.value)}
      />
      <input type="number" placeholder='Podaj waga..'
      value={waga}
      onChange={(e) => setWaga(e.target.value)}
      />
      <input type="number" placeholder='Podaj wiek..'
      value={wiek}
      onChange={(e) => setWiek(e.target.value)}
      />

      <p>Wybierz plec</p>
      <label htmlFor="men">
        <input type="radio" id='men' name='gender'
        
        value={'mezczyzna'}
        checked={plec === 'mezczyzna'}
        onChange={(e) => setPlec(e.target.value)}
        
        /> Mezczyzny
      </label>
      
      <label htmlFor="women">
        <input type="radio" id='women'  name='gender'
        
        value={'kobieta'}
        checked={plec === 'kobieta'}
        onChange={(e) => setPlec(e.target.value)}
        
        
        /> Kobieta
      </label>

      <p>Wybierz aktywnosc</p>
      <select name="" id=""
      value={aktywnosc}
      onChange={(e) => setAktywnosc(e.target.value)}
      >
        <option value="1.2">Mala aktywnosc</option>
        <option value="1.5">Srednia aktywnosc</option>
        <option value="1.9">Duze aktywnosc</option>
      </select>

      <label htmlFor="redukcja">
        <input type="checkbox" id='redukcja'
        checked={redukcja}
        onChange={(e) => setRedukcja(e.target.checked)}
        /> Chce schudnac
      </label>
      <button>Oblicz</button>
      </form>
      <p>{kalorie}</p>
    </main>
    </>
  )
}

export default App
