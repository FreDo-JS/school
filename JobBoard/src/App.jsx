import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function JobOffer({title,company, seniority, contract, type}){
  return(
    <>
      <div className='offer-box'>
        <h2>{title}</h2>
        <p><strong>{company}</strong></p>
        <p>{seniority} | {contract} | {type}</p>
      </div>
    </>
  )
}

const jobs = [
  { id: 1, title: 'Programista', company: 'Forcom', seniority: 'Senior', contract: 'B2B', type: 'Full-time' },
  { id: 2, title: 'Frontend Developer', company: 'Netguru', seniority: 'Mid', contract: 'B2B', type: 'Full-time' },
  { id: 3, title: 'Backend Developer', company: 'Allegro', seniority: 'Senior', contract: 'UoP', type: 'Full-time' },
  { id: 4, title: 'Data Scientist', company: 'CD Projekt RED', seniority: 'Mid', contract: 'UoP', type: 'Full-time' },
  { id: 5, title: 'DevOps Engineer', company: 'Żabka Nano', seniority: 'Senior', contract: 'B2B', type: 'Full-time' },
  { id: 6, title: 'UX/UI Designer', company: 'mBank', seniority: 'Junior', contract: 'UZ', type: 'Part-time' },
  { id: 7, title: 'QA Tester', company: 'Asseco', seniority: 'Mid', contract: 'UoP', type: 'Full-time' },
  { id: 8, title: 'Mobile Developer (iOS)', company: 'CCC', seniority: 'Senior', contract: 'B2B', type: 'Full-time' },
  { id: 9, title: 'Fullstack Developer', company: 'Comarch', seniority: 'Junior', contract: 'UoP', type: 'Full-time' },
  { id: 10, title: 'IT Project Manager', company: 'InPost', seniority: 'Mid', contract: 'B2B', type: 'Full-time' }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>Job Board</header>
      <main>
        {jobs.map((job) =>(
          <JobOffer key={job.id} title={job.title} company={job.company} seniority={job.seniority}
          contract={job.contract} type={job.type} />
        ))}
      </main>
    </>
  )
}

export default App
