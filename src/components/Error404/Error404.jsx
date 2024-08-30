import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error404.css';

export const Error404 = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="error-page">
            <div className="error-image">
                <img src="/image/404.webp" alt="404 Not Found" />
            </div>

            <h1>Такой страницы нет!</h1>
            <button className="btn btn-primary" onClick={goToHome}>Перейти на главную</button>
        </div>
    );
};