import { useState } from "react";
import {JobOffer} from './JobOffer'
export function Lists(){
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


  const [wymiar, setWymiar] = useState('all')

  const [umowa, setUmowa] = useState('all')

  const filter = jobs.filter((job) => (wymiar === 'all' || wymiar === job.type) && 
                            (umowa === 'all' || umowa === job.contract))
 
    return(
    <>
            <aside>
          <select className='form-control' name="" id="" value={wymiar} 
          onChange={(e) => setWymiar(e.target.value)}
          >
            <option value="all">Wszystkie</option>
            <option value="Full-time">Pełen etat</option>
            <option value="Part-time">Niepełny etat</option>
          </select>
          <select name="" id="" value={umowa}
            onChange={(e) => setUmowa(e.target.value)}
          >
            <option value="all">Wszystkie</option>
            <option value="B2B">B2B</option>
            <option value="UoP">Umowa o prace</option>
            <option value="UZ">Umowa zlecenie</option>
          </select>
        </aside>
        <section>
          {filter.map((job) =>(
          <JobOffer key={job.id} title={job.title} company={job.company} seniority={job.seniority}
          contract={job.contract} type={job.type} />
        ))}
        </section>
    </>
    )
}