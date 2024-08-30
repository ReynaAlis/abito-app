import './Side.css';

export const Side = ({ title, text, img }) => {
    return (
        <div className="content-side__item">
            <img className="content-side__item--img" src={img} alt="Доставка" />
            <h4 className="content-side__item--title">{title}</h4>
            <p className="content-side__item--text">{text}</p>
        </div>
    )
};