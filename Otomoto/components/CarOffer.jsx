import 'bootstrap/dist/css/bootstrap.css'
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
                    <Road  className="icons"/>{przebieg} km | <Fuel className="icons" /> {fuel}  | <Calendar className="icons"/> {year}
                </p>
            </section>
            <section className="car-price">
                <strong>{price} <sup>PLN</sup> </strong>
                <button className='btn btn-primary'>Zobacz</button>
            </section>
        </div>
    </>
}