
import { Road } from "lucide-react"
import { Fuel } from "lucide-react"
import { Calendar } from "lucide-react"
export function CarOffer({title, price, fuel, year, przebieg}) {
    return <>
        <div className="container">
            <section className="photo"></section>
            <section className="car-info">
                <h2>{title}</h2>
                <p>
                    <Road />{przebieg} km | <Fuel /> {fuel}  | <Calendar /> {year}
                </p>
            </section>
            <section className="car-price">
                <strong>{price} <sup>PLN</sup> </strong>
            </section>
        </div>
    </>
}