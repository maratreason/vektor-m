import React, { useState } from "react";
import "./Select.scss";
import shevronIcon from "../../../assets/calc/chevron-down.png";

const Select = () => {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [active, setActive] = useState(false);
    const [selectBody, setSelectBody] = useState([
        {id: 0, title: 0},
        {id: 1, title: 1},
        {id: 2, title: 2},
        {id: 3, title: 3},
        {id: 4, title: 4},
        {id: 5, title: 5},
        {id: 6, title: 6}
    ]);

    const toggleSelect = () => {
        let cur = active ? false : true;
        setActive(cur);
    }
    
    const chooseSelect = (value: number) => {
        setCurrentValue(value);
    }

	return (
		<div
            className={`section__select ${active ? "active": ""}`} 
            onClick={toggleSelect}
        >
			<div className="select__header" >
				<div className="select__current">{currentValue}</div>
				<div className="select__icon">
					<img className="select__image" src={shevronIcon} alt="" />
				</div>
			</div>
			<div className="select__body">
                {
                    active && selectBody.map(item => 
                        <div 
                            key={item.id}
                            className="select__item"
                            onClick={() => chooseSelect(+item.title)}
                        >{item.title}</div>
                    )
                }
			</div>
		</div>
	);
};

export default Select;
