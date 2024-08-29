import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { Side } from "../components/Side/Side";
import { cardArray } from "../contstants";
import { sideArray } from "../contstants";

export const Home = () => {
    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" placeholder="Поиск по объявлениям" />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn__icon" src="/image/search.svg" alt="Значок поиска" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>
                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
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
                                        <a className="content-side__footer--link" href="#!">Политика конфиденциальности</a>
                                        <a className="content-side__footer--link" href="#!">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};