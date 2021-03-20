import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Calculator.scss";
import moyka1 from "../../assets/calc/car-wash.svg";
import moyka2 from "../../assets/calc/car-wash-sys.svg";
import moyka3 from "../../assets/calc/car-wash-system.svg";
import moyka4 from "../../assets/calc/car-repair.svg";
import moyka5 from "../../assets/calc/car-house.svg";

import { checkPostNumber, setBottomMenuStep, checkConsolePost } from "../../store/action-creators/calc";
import Button from "../UI-components/Button/Button";
import CalcGroupBlock from "../UI-components/CalcGroupBlock";

const Calculator: React.FC = () => {
    const {step, posts, consolePosts} = useSelector((state: any) => state.calc);
    const {step2} = useSelector((state: any) => state.calc.steps);
    console.log("step2", step2.items);

    const dispatch = useDispatch();

    const setStep = (step: number) => {
        dispatch(setBottomMenuStep(step));
    }

    const checkPostHandler = (postNumber: number) => {
        dispatch(checkPostNumber(postNumber));
    }

    const checkConsolePostHandler = (postNumber: number) => {
        dispatch(checkConsolePost(postNumber));
    }

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
                <div 
                    onClick={() => setStep(1)} 
                    className={`calc__bottommenu-item ${step === 1 ? "active" : ""}`}
                >
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Количество постов</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">150000 ₽</div>
                </div>
                <div
                    onClick={() => setStep(2)}
                    className={`calc__bottommenu-item ${step === 2 ? "active" : ""}`}
                >
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Конфигурация пультов</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">0 ₽</div>
                </div>
                <div
                    onClick={() => setStep(3)}
                    className={`calc__bottommenu-item ${step === 3 ? "active" : ""}`}
                >
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Дополнительное оборудование</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">0 ₽</div>
                </div>
                <div
                    onClick={() => setStep(4)}
                    className={`calc__bottommenu-item ${step === 4 ? "active" : ""}`}
                >
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Параметры строительства</p>
                        <span className="calc__bottommenu-help">?</span>
                    </div>
                    <div className="calc__bottommenu-sum">0 ₽</div>
                </div>
                <div
                    onClick={() => setStep(5)}
                    className={`calc__bottommenu-item ${step === 5 ? "active" : ""}`}
                >
                    <div className="calc__bottommenu-text">
                        <p className="calc__bottommenu-point">Итого</p>
                    </div>
                    <div className="calc__bottommenu-sum">152400 ₽</div>
                </div>
            </div>
        </div>
        
        <div className={step === 1 ? "calc__content active" : "calc__content"}>
            <div className="calc__content-title">Посты</div>
            <div className="calc__content-wrapper">
                <div className="calc__content-sitebar">
                    <div className="calc__sitebar-posts">
                        <div className="calc__sitebar-posttitle">Количество постов</div>
                        <ul className="calc__postitems">
                            {
                                posts.map((post: any) => {
                                    return (
                                        <li
                                            key={post.id}
                                            className={`calc__postitem ${post.check ? "active" : ""}`}
                                            onClick={() => checkPostHandler(post.id - 1)}
                                        >
                                            <span className="calc__postitem-round"></span>{post.caption}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="calc__sitebar-posttitle">Консольные посты</div>
                        <ul className="calc__postitems">
                            {
                                consolePosts.map((post: any) => {
                                    return (
                                        <li onClick={() => checkConsolePostHandler(post.id - 1)} key={post.id} className={`calc__postitem ${post.check ? "active" : ""}`}>
                                            <span className="calc__postitem-box"></span>{post.caption}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="calc__content-main">
                    {
                        posts.map((post: any) => {
                            let img = post.img;
                            if (consolePosts[0].check) img = post.img_left;
                            if (consolePosts[1].check) img = post.img_right;
                            if (consolePosts[0].check && consolePosts[1].check) img = post.img_all;
                            if (post.check) {
                                return (
                                    <div 
                                        key={post.id}
                                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/media/post-images/${img})` }}
                                        className="calc__main-image"
                                    >
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>

        <div className={step === 2 ? "calc__content active" : "calc__content"}>
            <div className="calc__content-title">Пульты</div>
            <div className="calc__content-wrapper">
                {
                    step2.items.map((step: any | undefined) => {
                        return <CalcGroupBlock
                            key={step.id}
                            sum={step.total_price} 
                            title={step.title} 
                            rows={step.rows}
                        />
                    })
                }
            </div>
        </div>
        <div className={step === 3 ? "calc__content active" : "calc__content"}>
            <div className="calc__content-title">Оборудование</div>
        </div>

        <div className="calc__buttons">
            {step > 1
                ? <Button onClickHandle={() => setStep(step - 1)} title="Назад" />
                : null
            }
            <Button onClickHandle={() => setStep(step + 1)} title="Далее" />
        </div>
    </div>;
};

export default Calculator;
