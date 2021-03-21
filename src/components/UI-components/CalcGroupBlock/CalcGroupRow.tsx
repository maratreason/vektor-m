import React from "react";
import CalcButton from "../CalcButton/CalcButton";
import Help from "../Help/Help";
import Select from "../Select/Select";

interface CalcGroupRowProps {
  label: string;
  help?: boolean;
  select?: boolean;
  calcButtons?: any[] | undefined;
  helpText?: string;
  setShowModal: (bool: boolean) => void;
}

const CalcGroupRow = (props: CalcGroupRowProps) => {
  const { label, help, helpText, select, calcButtons, setShowModal } = props;
  return (
    <div className="calc__content-item-row">
      <div className="calc__content-item-wrapper">
        <div className="calc__content-item-label">{label}</div>
        {help ? <Help text={helpText} /> : null}
      </div>
      {select ? <Select /> : null}
      <div className="calc__content-item-wrapper">
        {calcButtons &&
          calcButtons.map((button) => (
            <CalcButton
              key={button.caption}
              title={button.caption}
              check={button.check}
              buttonId={button.id}
              setShowModal={setShowModal}
            />
          ))}
      </div>
    </div>
  );
};

export default CalcGroupRow;
