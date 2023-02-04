import React, { Component } from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, MenuIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

import IMenuItem from '../../models/menu-item';
import MenuList from './menu-list/menu-list';

import appHeaderStyle from './app-header.module.css';

class AppHeader extends Component {
    // TODO Потом можно будет навешивать проверку активного состояния меню и навешивать нужный 
    // класс для цвета кнопки, вместо true и false в type и isActive
    menuItems: IMenuItem[] = [
        {
            text: 'Конструктор',
            icon: <BurgerIcon type={true ? 'primary': 'secondary'} />,
            isActive: true
        },
        {
            text: 'Лента заказов',
            icon: <MenuIcon type={false ? 'primary': 'secondary'} />
        },
        {
            text: 'Личный кабинет',
            icon: <ProfileIcon type={false ? 'primary': 'secondary'} />,
            isRightMenu: true
        }
    ];

    render() {
        return <header className={appHeaderStyle.header} >
            <nav className={`${appHeaderStyle.nav} pt-4 pb-4`}>
                <MenuList menuList={this.menuItems} />
                <div className={appHeaderStyle.logo}>
                    <Logo />
                </div>
                <MenuList menuList={this.menuItems} isRightMenu={true} />
            </nav>
        </header>;
    }
}

export default AppHeader;