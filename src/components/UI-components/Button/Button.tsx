import React from "react";
import "./Button.scss";

interface ButtonType {
	title?: string;
	type?: string;
	onClickHandle?: () => void;
}

const Button = ({ title, type = "", onClickHandle}: ButtonType) => {
	return <button onClick={onClickHandle} className={type ? `btn btn-${type}` : "btn"}>{title}</button>;
};

export default Button;
