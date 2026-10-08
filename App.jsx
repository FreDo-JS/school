import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  const [wzrost, setWzrost] = useState('')
  const [waga, setWaga] = useState('')
  const [wiek, setWiek] = useState('')

  const [aktywnosc, setAktywnosc] = useState('1.4')
  const [plec, setPlec] = useState('mezczyzna')
  const [redu, setRedu] = useState(false)

  const [kalorie, setKalorie] = useState(null)

  function onSubmit(e)
  {
    e.preventDefault();

    let bmr;

    if(plec === 'mezczyzna')
    {
      bmr = 10 * waga + 6.25 * wzrost - 5 * wiek + 5
    }
    else
    {
       bmr = 10 * waga + 6.25 * wzrost - 5 * wiek - 161
    }

    let wynik = bmr * Number(aktywnosc)

    if(redu)
    {
      wynik = wynik - 300
    }
    setKalorie(`Twoje zapotrzebowanie wynosi: ${Math.floor(wynik)} `)
  }

  return (
    <>
      <main>
        <form action="" onSubmit={onSubmit}>
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

          <p>Wybierz aktywnosc</p>
          <select name="" id=""
           value={aktywnosc}
          onChange={(e) => setAktywnosc(e.target.value)}
          >
            <option value="1.4">Mala aktywnosc</option>
            <option value="1.6">Srednia aktywnosc</option>
            <option value="1.9">Duza aktywnosc</option>
          </select>
          <p>Wybierz plec:</p>
          <label htmlFor="men">
            <input type="radio" id='men' name='gender'
            value={'mezczyzna'}
            checked={plec ==='mezczyzna'}
            onChange={(e) => setPlec(e.target.value)}
            
            /> Mężczyzna
          </label>

          <label htmlFor="women">
            <input type="radio" id='women' name='gender'
            value={'kobieta'}
            checked={plec ==='kobieta'}
            onChange={(e) => setPlec(e.target.value)}
            /> Kobieta
          </label>
          <br />
          <label htmlFor="redu">
              <input type="checkbox" id='redu' 
              checked={redu}
              onChange={(e) => setRedu(e.target.checked)}
              /> Chce schudnac
          </label>
          <br />
          <button>Oblicz</button>
          <p>{kalorie}</p>
        </form>
      </main>
    </>
  )
}

export default App
