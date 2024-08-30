import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({ id, title, price, address, date, img }) => {

    return (
        <Link className="card" to={`/product/${id}`}>
            <div className="card--image">
                <img src={img} alt="{title}" />
            </div>
            <h3 className="card--title">{title}</h3>
            <strong className="card--price">{price}</strong>
            <span className="card--desc">{address}</span>
            <span className="card--desc">{date}</span>
        </Link>
    )
};