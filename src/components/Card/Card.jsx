import './Card.css';

export const Card = ({title, price, address, date, img}) => {

    return (
        <a className="card" href="product.html">
            <div className="card--image">
                <img src={img} alt="{title}" />
            </div>
            <h3 className="card---title">{title}</h3>
            <strong className="card---price">{price}</strong>
            <span className="card---desc">{address}</span>
            <span className="card---desc">{date}</span>
        </a>
    )
};