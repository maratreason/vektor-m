import React from "react";
import CalcGroupRow from "./CalcGroupRow";

interface calcGroupBlockProps {
  sum?: number;
  title?: string;
  rows?: any;
  setShowModal: (bool: boolean) => void;
}

const CalcGroupBlock = (props: calcGroupBlockProps) => {
  const { sum, title, rows, setShowModal } = props;
  return (
    <div className="calc__content-item">
      <div className="calc__content-item--title">{title}</div>
      <CalcGroupRow
        setShowModal={setShowModal}
        label="Количество пультов"
        helpText={"Выберите количество пультов. Минимальное количество равно количеству постов"}
        help={true}
        select={true}
      />
      <CalcGroupRow
        setShowModal={setShowModal}
        label="Функции поста"
        helpText={"Выберите комплектующие, купюроприемники, монетоприемники и т.д."}
        help={true}
        calcButtons={rows[0]}
      />
      <CalcGroupRow
        setShowModal={setShowModal}
        label="В пульт входят"
        helpText={"Выберите комплектующие пультов, поворотные консоли, пистолеты, держатели для ковриков"}
        help={true}
        calcButtons={rows[1]}
      />
      <div className="calc__content-item-row">
        <div className="calc__content-item-sum">{sum}₽</div>
      </div>
    </div>
  );
};

export default CalcGroupBlock;
