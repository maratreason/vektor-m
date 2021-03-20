import React, { useEffect, useState } from "react";
import "./CalcButton.scss";
import checkIcon from "../../../assets/ui/check.png";
import { useDispatch } from "react-redux";
import { checkCalcButton } from "../../../store/action-creators/calc";

interface CalcButtonProps {
  title: string;
  check: boolean;
  buttonId: number;
}

const CalcButton = (props: CalcButtonProps) => {
  const dispatch = useDispatch();
  const { title, check, buttonId } = props;

  const toggleClickHandler = (id: number): void => {
    dispatch(checkCalcButton(id));
  };

  return (
    <div
      onClick={() => toggleClickHandler(buttonId)}
      className={`calc-button ${check ? "active" : null}`}
      data-id={buttonId}
    >
      <div className="calc-title">
        {title} <span className="calc-title__add">{check ? `\nдобавлен` : null}</span>
      </div>
      <div className="calc-icon">{check ? <img src={checkIcon} alt={title} /> : null}</div>
    </div>
  );
};

export default CalcButton;
