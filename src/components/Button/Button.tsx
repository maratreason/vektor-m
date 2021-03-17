import React from "react";
import "./Button.scss";

interface ButtonType {
	title: string;
	type?: string;
}

const Button = ({ title, type = ""}: ButtonType) => {
	return <button className={type ? `btn btn-${type}` : "btn"}>{title}</button>;
};

export default Button;
