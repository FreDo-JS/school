import { useState } from "react";
import { CarOffer } from "./CarOffer";

export function Starting() {
  const carMarket = [
    { id: 1, marka: "Audi", title: "Audi A5 Limosuine S-Line", price: 75000, fuel: "Benzyna", year: 2018, przebieg: 74999 },
    { id: 2, marka: "Mercedes", title: "Mercdes CLA", price: 137000, fuel: "Diesel", year: 2022, przebieg: 183523 },
    { id: 3, marka: "BMW", title: "BMW Seria 3 M-Pakiet", price: 115000, fuel: "Benzyna", year: 2020, przebieg: 65000 },
    { id: 4, marka: "Volkswagen", title: "Volkswagen Golf GTI", price: 89000, fuel: "Benzyna", year: 2019, przebieg: 82000 },
    { id: 5, marka: "Toyota", title: "Toyota Corolla Hybrid", price: 92000, fuel: "Hybryda", year: 2021, przebieg: 45000 },
    { id: 6, marka: "Skoda", title: "Skoda Octavia Combi", price: 68000, fuel: "Diesel", year: 2017, przebieg: 154000 },
    { id: 7, marka: "Volvo", title: "Volvo XC60 Inscription", price: 145000, fuel: "Diesel", year: 2021, przebieg: 98000 },
    { id: 8, marka: "Ford", title: "Ford Focus ST-Line", price: 59000, fuel: "Benzyna", year: 2018, przebieg: 112000 },
    { id: 9, marka: "Kia", title: "Kia Ceed L", price: 73000, fuel: "Benzyna", year: 2022, przebieg: 34000 },
    { id: 10, marka: "Hyundai", title: "Hyundai Tucson Smart", price: 105000, fuel: "Hybryda", year: 2023, przebieg: 21000 },
    { id: 11, marka: "Nissan", title: "Nissan Qashqai Tekna", price: 84000, fuel: "Benzyna", year: 2020, przebieg: 60000 },
    { id: 12, marka: "Tesla", title: "Tesla Model 3 Long Range", price: 165000, fuel: "Elektryczny", year: 2022, przebieg: 40000 }
  ];

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
