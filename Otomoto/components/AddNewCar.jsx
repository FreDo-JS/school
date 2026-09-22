export function AddNewCar()
{
    return(<>
        <form action="">
        <input type="text" className="form-control" placeholder="Marka auta" />
        <input type="text" className='form-control'placeholder="Podaj nazwe"/>
        <input type="number" className='form-control' placeholder="Podaj kwote" />
        <p>Rodzaj paliwa</p>
        <select className="form-select form-select-sm mb-3" name="" id="">
            <option value="" disabled selected>Wybierz</option>
            <option value="Benzyna">Benzyna</option>
            <option value="Diesel">Diesel</option>
            <option value="Elektryk">Elektryk</option>
        </select>
        <p>Rok produkcji</p>
        <input type="number"className='form-control' />
        <br />
        <input type="number" placeholder="Podaj przebieg" className='form-control' />
        <button className="btn btn-success">Dodaj</button>
        </form>
    </>)
}  