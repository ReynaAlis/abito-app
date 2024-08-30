import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <Link className="header-logo" to={'/'}>
                        <img src="/image/logo.svg" alt="Логотип Abito" />
                        <span>Abito</span>
                    </Link>
                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>

                    <div className="header-burger">
                        <img src="/image/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
};