import { Link, useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { Side } from "../components/Side/Side";
import { sideArray } from "../contstants";

export const Home = () => {
    const {products} = useOutletContext();
    return (
            <section className="content">
                <div className="container">
                    <div className="content-box">
                        <div className="content-main">
                            <h2 className="content-main__title">Рекомендации для вас</h2>
                            <div className="content-main__list">
                                {
                                    products.map(card => (
                                        <Card
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            price={card.price}
                                            address={card.address}
                                            date={card.date}
                                            img={card.img}
                                        />
                                    ))
                                }
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
                                <Link className="content-side__footer--link" to="/non-existent-page">Политика конфиденциальности</Link>
                                <Link className="content-side__footer--link" to="/non-existent-page">Обработка данных</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
};