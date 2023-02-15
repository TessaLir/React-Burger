import React, { ReactElement } from "react";

import menuElementStyle from "./menu-element.module.css";

interface IProps {
  children: ReactElement | ReactElement[];
  text: string;
  isActive?: boolean;
}

const MenuElement = (props: IProps) => {
    const { children, text, isActive } = props;
    const textClass = isActive
      ? `${menuElementStyle.active}`
      : `${menuElementStyle.inactive}`;
      
    return (
      <li className={`${menuElementStyle.item} p-5`}>
        {children}
        <p className={`text text_type_main-default ml-2 ${textClass}`}>
          {text}
        </p>
      </li>
    );
}

export default MenuElement;
