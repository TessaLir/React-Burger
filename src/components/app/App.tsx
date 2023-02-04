import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import { getBurgerIngredient } from '../../api/burger-api';

import appStyle from './App.module.css';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount(): void {
    this.setState({ ...this.state, data: getBurgerIngredient() })
  }

  render() {
    return (
      <div className={appStyle.app}>
        <AppHeader />
        <main>
          <div className={appStyle.container}>
            <BurgerIngredients data={ this.state.data } />
            <BurgerConstructor />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
