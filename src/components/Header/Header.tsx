import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI-components/Button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top-wrapper">
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              <img src="" alt="logo" /> VEKTOR-M
            </Link>
          </div>
          <ul className="header__top-items">
            <li className="header__top-item">
              <Link to="/" className="header__top-link">
                Главная
              </Link>
            </li>
            <li className="header__top-item">
              <Link to="/" className="header__top-link">
                О компании
              </Link>
            </li>
            <li className="header__top-item">
              <Link to="/" className="header__top-link">
                Статьи
              </Link>
            </li>
            <li className="header__top-item">
              <Link to="/" className="header__top-link">
                Контакты
              </Link>
            </li>
            <li className="header__top-item">
              <Link to="/" className="header__top-link">
                Наши работы
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__top-buttons">
          <Button type="secondary" title="Калькулятор" />
          <Button title="Заказать звонок" />
        </div>
      </div>
      <div className="header__content">
        <div className="header__image">
          <div className="header__image-text">
            <div className="header__image-title">1000 Автомоек</div>
            <div className="header__image-subtitle">Более 1000 работающих объектов! Работа без подводных камней!</div>
          </div>
        </div>
        <div className="header__text">
          <div className="header__info">
            <div className="header__info-item">
              <p className="header__info-title">Отдел продаж:</p>
              <p className="header__info-phone">8 (800) 839-21-03</p>
              <p className="header__info-links">links</p>
            </div>
            <div className="header__info-item">
              <p className="header__info-title">Приемная:</p>
              <p className="header__info-phone">8 (800) 839-21-03</p>
              <p className="header__info-links">links</p>
            </div>
          </div>
          <div className="header__title-wrapper">
            <div className="header__title">Модульные автомойки</div>
            <div className="header__subtitle">
              Более 1000 работающих объектов!
              <br />
              Работа без подводных камней!
            </div>
          </div>
          <div className="header__buttons">
            <Button type="primary" title="Продукция" />
            <Button type="primary" title="Интернет-магазин" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
