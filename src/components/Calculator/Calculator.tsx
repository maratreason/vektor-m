import React from "react";
import "./Calculator.scss";
import moyka1 from "../../assets/calc/car-wash.svg";
import moyka2 from "../../assets/calc/car-wash-sys.svg";
import moyka3 from "../../assets/calc/car-wash-system.svg";
import moyka4 from "../../assets/calc/car-repair.svg";
import moyka5 from "../../assets/calc/car-house.svg";
import Button from "../Button/Button";

const Calculator = () => {
	return <div className="calc">
        <div className="calc__title">Калькулятор</div>
        <div className="calc__topmenu">
            <div className="calc__topmenu-type">Выберите тип</div>
            <div className="calc__topmenu-items">
                <div className="calc__topmenu-item active">
                    <img className="calc__topmenu-image" src={moyka1} alt=""/>
                    <span className="calc__topmenu-text">Мойки<br /> самообслуживания</span>
                </div>
                <div className="calc__topmenu-item">
                    <img className="calc__topmenu-image" src={moyka2} alt=""/>
                    <span className="calc__topmenu-text">Модульные<br /> автомойки</span>
                </div>
                <div className="calc__topmenu-item">
                    <img className="calc__topmenu-image" src={moyka3} alt=""/>
                    <span className="calc__topmenu-text">Автомоечные<br /> комплексы</span>
                </div>
                <div className="calc__topmenu-item">
                    <img className="calc__topmenu-image" src={moyka4} alt=""/>
                    <span className="calc__topmenu-text">Роботы<br /> автомойки</span>
                </div>
                <div className="calc__topmenu-item">
                    <img className="calc__topmenu-image" src={moyka5} alt=""/>
                    <span className="calc__topmenu-text">Строительство<br /> автомойки</span>
                </div>
            </div>
        </div>
        <div className="calc__bottommenu">
            <div className="calc__bottommenu-title">Выберите необходимые параметры</div>
            <div className="calc__bottommenu-items">
                <div className="calc__bottommenu-item active">
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Количество постов</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">150000 ₽</div>
                </div>
                <div className="calc__bottommenu-item">
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Конфигурация пультов</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">0 ₽</div>
                </div>
                <div className="calc__bottommenu-item">
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Дополнительное оборудование</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">0 ₽</div>
                </div>
                <div className="calc__bottommenu-item">
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Параметры строительства</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">0 ₽</div>
                </div>
                <div className="calc__bottommenu-item">
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Итого</p>
                    </div>
                    <div className="calc__bottommenu-sum">152400 ₽</div>
                </div>
            </div>
        </div>
        
        <div className="calc__content">
            <div className="calc__content-title">Посты</div>
            <div className="calc__content-wrapper">
                <div className="calc__content-sitebar">
                    <div className="calc__sitebar-posts">
                        <div className="calc__sitebar-posttitle">Количество постов</div>
                        <ul className="calc__postitems">
                            <li className="calc__postitem active"><span className="calc__postitem-round"></span> 1 пост</li>
                            <li className="calc__postitem"><span className="calc__postitem-round"></span> 2 поста</li>
                            <li className="calc__postitem"><span className="calc__postitem-round"></span> 3 поста</li>
                            <li className="calc__postitem"><span className="calc__postitem-round"></span> 4 поста</li>
                            <li className="calc__postitem"><span className="calc__postitem-round"></span> 5 постов</li>
                            <li className="calc__postitem"><span className="calc__postitem-round"></span> 6 постов</li>
                            <li className="calc__postitem"><span className="calc__postitem-round"></span> 7 постов</li>
                            <li className="calc__postitem"><span className="calc__postitem-round"></span> 8 постов</li>
                        </ul>
                        <div className="calc__sitebar-posttitle">Консольные посты</div>
                        <ul className="calc__postitems">
                            <li className="calc__postitem"><span className="calc__postitem-box"></span> Левый</li>
                            <li className="calc__postitem"><span className="calc__postitem-box"></span> Правый</li>
                        </ul>
                    </div>
                </div>
                <div className="calc__content-main">
                    <div className="calc__main-image"></div>
                </div>
            </div>
        </div>
        <div className="calc__buttons">
            <Button title="Далее" />
        </div>
    </div>;
};

export default Calculator;
