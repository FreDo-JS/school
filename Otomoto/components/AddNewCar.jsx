import { useState } from "react";

export function AddNewCar({carMarket, setCarMarket}) {
  

    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(car);
        
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="marka"
                className="form-control"
                placeholder="Marka auta"
               
            />

            <input
                type="text"
                name="nazwa"
                className="form-control"
                placeholder="Podaj nazwę"
              
            />

            <input
                type="number"
                name="kwota"
                className="form-control"
                placeholder="Podaj kwotę"
               
            />

            <p>Rodzaj paliwa</p>

            <select
                name="paliwo"
                className="form-select form-select-sm mb-3"
              
            >
                <option value="" disabled>
                    Wybierz
                </option>
                <option value="Benzyna">Benzyna</option>
                <option value="Diesel">Diesel</option>
                <option value="Elektryk">Elektryk</option>
            </select>

            <p>Rok produkcji</p>

            <input
                type="number"
                name="rok"
                className="form-control"
              
            />

            <br />

            <input
                type="number"
                name="przebieg"
                placeholder="Podaj przebieg"
                className="form-control"
               
            />

            <button type="submit" className="btn btn-success">
                Dodaj
            </button>
        </form>
    );
}
