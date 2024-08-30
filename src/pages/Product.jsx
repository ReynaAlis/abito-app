import { useOutletContext } from "react-router-dom";
import { Side } from "../components/Side/Side";
import { sideArray } from "../contstants";
import { useParams } from "react-router-dom";

export const Product = () => {
    const { products } = useOutletContext();
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id);

    return (
            <section className="content">
                <div className="container">
                    {findProduct ?
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product__left">
                                    <h2 className="content-product__title">{findProduct.title}</h2>

                                    <img className="content-product__image" src={findProduct.img}
                                        alt={findProduct.title} />

                                    <p className="content-product__text">{findProduct.description}</p>
                                </div>

                                <div className="content-product__right">
                                    <h2 className="content-product__price">{findProduct.price}</h2>
                                    <button className="btn btn-primary btn-large">Показать телефон</button>
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        {
                                            sideArray.map(side => (
                                                <Side
                                                    key={side.id}
                                                    title={side.title}
                                                    text={side.text}
                                                    img={side.img}
                                                />
                                            ))
                                        }
                                    </div>

                                    <div className="content-side__footer">
                                        <p className="content-side__footer--text">© ООО «Абито», 2011–2021</p>
                                        <a className="content-side__footer--link" href="#!">Политика конфиденциальности</a>
                                        <a className="content-side__footer--link" href="#!">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <h2>Такого товара не существует!</h2>}
                </div>
            </section>
    )
};