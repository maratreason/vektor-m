import React, { useState } from "react";
import "./Help.scss";

interface HelpProps {
  text?: string;
}

const Help = ({ text }: HelpProps) => {
  const [show, setShow] = useState(false);
  const toggleCheckModal = () => {
    const active = show ? false : true;
    setShow(active);
  };

  return (
    <div className="help" onClick={toggleCheckModal}>
      <div className="help__icon">?</div>
      <span className={`help__modal ${show ? "active" : ""}`}>{text}</span>
    </div>
  );
};

export default Help;
