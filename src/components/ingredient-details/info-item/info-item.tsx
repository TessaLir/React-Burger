import React from "react";

import styleClass from "./info-item.module.css";

interface IProps {
  title: string;
  value: number;
}

const InfoItem = ({ title, value }: IProps) => {
  return (
    <li className={`${styleClass.info} text text_type_main-small`}>
      {title}
      <br />
      <span className="text_type_digits-medium">{value}</span>
    </li>
  );
};

export default InfoItem;
