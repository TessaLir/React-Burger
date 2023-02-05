import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import { getBurgerIngredient } from "../../api/burger-api";

import appStyle from "./App.module.css";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ ...this.state, data: getBurgerIngredient() });
    }, 750);
  }

  render() {
    const content =
      this.state.data.length === 0 ? (
        <h3
          className={`text text_type_main-large mb-5 ${appStyle.loading_text}`}
        >
          Загрузка данных
        </h3>
      ) : (
        <main>
          <div className={appStyle.container}>
            <BurgerIngredients data={this.state.data} />
            <BurgerConstructor data={this.state.data} />
          </div>
        </main>
      );

    return (
      <div className={appStyle.app}>
        <AppHeader />
        {content}
      </div>
    );
  }
}

export default App;
