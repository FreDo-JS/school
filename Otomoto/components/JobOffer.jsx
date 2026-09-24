export function JobOffer({title,company, seniority, contract, type}){
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