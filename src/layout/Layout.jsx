import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useState, useEffect } from "react";
import { cardArray } from "../contstants";

export const Layout = () => {
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchText(value);

        if (value.trim() === '') {
            setProducts(cardArray); 
        }
    };


    const handleSearcArray = () => {
        const normalizedSearchText = searchText.trim().toLowerCase();

        if (normalizedSearchText === '') {
            setProducts(cardArray); 
        } else {
            setProducts(cardArray.filter((p) =>
                p.title.toLowerCase().includes(normalizedSearchText) ||
                p.price.toLowerCase().includes(normalizedSearchText)
            ));
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearcArray(); 
        }
    };

    useEffect(() => {
        setProducts(cardArray);
    }, []);


    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                value={searchText}
                                onChange={handleSearch}
                                onKeyDown={handleKeyDown}
                                type="text"
                                placeholder="Поиск по объявлениям" />
                            <button className="btn btn-primary search-btn" onClick={handleSearcArray}>
                                <img className="search-btn__icon" src="/image/search.svg" alt="Значок поиска" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{ products }} />
            </main>
        </>
    )
};