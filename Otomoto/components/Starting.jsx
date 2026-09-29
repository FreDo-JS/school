import { useState } from "react";
import { CarOffer } from "./CarOffer";

export function Starting({carMarket, setCarMarket}) {


  const [kategoria, setKategoria] = useState("all");
  const [paliwo, setPaliwo] = useState("all");

  const filtered = carMarket.filter(
    (car) =>
      (kategoria === "all" || kategoria === car.marka) &&
      (paliwo === "all" || paliwo === car.fuel)
  );

  return (
    <>
      <nav>
        <select
          className="form-control"
          value={kategoria}
          onChange={(e) => setKategoria(e.target.value)}
        >
          <option value="all">Wszystkie</option>

          {carMarket.map((car) => (
            <option key={car.id} value={car.marka}>
              {car.marka}
            </option>
          ))}
        </select>

        <p>Rodzaj paliwa</p>

        <select
          className="form-control"
          value={paliwo}
          onChange={(e) => setPaliwo(e.target.value)}
        >
          <option value="all">Wszystkie</option>
          <option value="Benzyna">Benzyna</option>
          <option value="Diesel">Diesel</option>
          <option value="Elektryczny">Elektryk</option>
          <option value="Hybryda">Hybryda</option>
        </select>
      </nav>

      <main>
        {filtered.map((car) => (
          <CarOffer
            key={car.id}
            title={car.title}
            price={car.price}
            fuel={car.fuel}
            year={car.year}
            przebieg={car.przebieg}
          />
        ))}
      </main>
    </>
  );
}
