import React, { Component, ReactElement } from "react";

import menuElementStyle from "./menu-element.module.css";

interface IProps {
  children: ReactElement | ReactElement[];
  text: string;
  isActive?: boolean;
}

class MenuElement extends Component<IProps> {
  state = {
    isActive: false,
  };

  componentDidMount(): void {
    if (this.props.isActive) {
      this.setState({ ...this.state, isActive: true });
    }
  }

  render() {
    const { children, text } = this.props;
    return (
      <>
        <li className={`${menuElementStyle.item} p-5`}>
          {children}
          <p
            className="text text_type_main-default ml-2"
            style={{ color: this.state.isActive ? "#F2F2F3" : "#8585AD" }}
          >
            {text}
          </p>
        </li>
      </>
    );
  }
}

export default MenuElement;
