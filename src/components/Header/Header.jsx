import './Header.css';
import { Link, useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate();

    const handleAuthClick = () => {
        navigate('/non-existent-page');
    };

    const handlePostClick = () => {
        navigate('/non-existent-page');
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <Link className="header-logo" to={'/'}>
                        <img src="/image/logo.svg" alt="Логотип Abito" />
                        <span>Abito</span>
                    </Link>
                    <div className="header-controls">
                        <button className="btn btn-outline" onClick={handleAuthClick}>Вход и регистрация</button>
                        <button className="btn btn-primary" onClick={handlePostClick}>Подать объявление</button>
                    </div>

                    <div className="header-burger">
                        <img src="/image/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
};