import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import dane from './conf.json'

function Tools({title, desc, fontColor}){
  return(
  <>
    <section>
      <h1 style={{color: fontColor}}>{title}</h1>
      <p>{desc}</p>
    </section>
  </>
  )
}

function Presenters({imie,dzial,firma,temat}){
  return(
    <>
      <section>
        <h2>{imie}</h2>
        <p>{dzial}</p>
        <p><em>{firma}</em></p>
        <p><strong>{temat}</strong></p>
      </section>
    </>
  )
}


function App() {
 
  const categorie = [
    {
      title: "frontend",
      description: "BUILDING MODERN INTERFACES FOR THE WEB",
      color: 'pink'
    },
    {
      title: "performance",
      description: "MAKE EVERY MILLISECOND COUNT",
      color: 'lime'
    },
    {
      title: "accessibility",
      description: "BUILDING INCLUSIVE EXPERIENCES FOR EVERYONE",
      color: 'skyblue'
    },
    {
      title: "tooling",
      description: "LEVEL UP YOUR DEVELOPER WORKFLOW",
      color: 'yellow'
    }
  ]
  
  const speakers = [
    {
      "name": "elena vasquez",
      "role": "PRINCIPAL FRONTEND ENGINEER",
      "company": "@BYTECRAFT",
      "topic": "THE NEXT FRONTIER OF WEB DEVELOPMENT"
    },
    {
      "name": "naomi tanaka",
      "role": "ACCESSIBILITY ENGINEERING LEAD",
      "company": "@AXION",
      "topic": "SCREEN READERS DESERVE BETTER COMPONENTS"
    },
    {
      "name": "james okonkwo",
      "role": "ENGINEERING DIRECTOR",
      "company": "@CARTWELL",
      "topic": "MONOREPOS AT SCALE: LESSONS FROM 500 PACKAGES"
    },
    {
      "name": "sarah lindström",
      "role": "DESIGN SYSTEMS LEAD",
      "company": "@TESSERA",
      "topic": "TYPE-SAFE DESIGN TOKENS ACROSS PLATFORMS"
    },
     {
      "name": "elena vasquez",
      "role": "PRINCIPAL FRONTEND ENGINEER",
      "company": "@BYTECRAFT",
      "topic": "THE NEXT FRONTIER OF WEB DEVELOPMENT"
    },
    {
      "name": "naomi tanaka",
      "role": "ACCESSIBILITY ENGINEERING LEAD",
      "company": "@AXION",
      "topic": "SCREEN READERS DESERVE BETTER COMPONENTS"
    },
    {
      "name": "james okonkwo",
      "role": "ENGINEERING DIRECTOR",
      "company": "@CARTWELL",
      "topic": "MONOREPOS AT SCALE: LESSONS FROM 500 PACKAGES"
    },
    {
      "name": "sarah lindström",
      "role": "DESIGN SYSTEMS LEAD",
      "company": "@TESSERA",
      "topic": "TYPE-SAFE DESIGN TOKENS ACROSS PLATFORMS"
    }
  ]

  const [allSpeakers, setAllSpeakers] = useState(false)

  const list = allSpeakers ? speakers : speakers.slice(0,4)

  return (
    <>
    <main>
      {categorie.map((opis) =>(
        <Tools title={opis.title} desc={opis.description} fontColor={opis.color} />
      ))}
    </main>
    <main>
      {list.map((speaker) =>(
        <Presenters 
        imie={speaker.name} 
        dzial={speaker.role} 
        firma={speaker.company} 
        temat={speaker.topic}
        />


      ))}
    </main>
    <button onClick={() => setAllSpeakers(!allSpeakers)}>SHOW {allSpeakers ? 'LESS' : 'MORE'}</button>
    </>
  )
}

export default App
