import React from "react";
import CalcGroupRow from "./CalcGroupRow";

interface calcGroupBlockProps {
  sum?: number;
  title?: string;
  rows?: any;
}

const CalcGroupBlock = (props: calcGroupBlockProps) => {
  const {sum, title, rows} = props;
  return (
    <div className="calc__content-item">
      <div className="calc__content-item--title">{title}</div>
      <CalcGroupRow label="Количество пультов" helpText={"Выберите количество пультов. Минимальное количество равно количеству постов"} help={true} select={true} />
      <CalcGroupRow label="Функции поста" helpText={"Выберите комплектующие, купюроприемники, монетоприемники и т.д."} help={true} calcButtons={rows[0]} />
      <CalcGroupRow label="В пульт входят" helpText={"Выберите комплектующие пультов, поворотные консоли, пистолеты, держатели для ковриков"} help={true} calcButtons={rows[1]} />
      <div className="calc__content-item-row">
        <div className="calc__content-item-sum">{sum}₽</div>
      </div>
    </div>
  );
};

export default CalcGroupBlock;
