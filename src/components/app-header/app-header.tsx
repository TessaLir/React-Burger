import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  MenuIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

import IMenuItem from "../../models/menu-item";
import MenuList from "./menu-list/menu-list";

import styleClass from "./app-header.module.css";

// TODO потом можно будет использовать в состоянии, пока что просто как константа.
// переносить в SD не стал, так как используется пока только тут.
const menuItems: IMenuItem[] = [
  {
    text: "Конструктор",
    icon: <BurgerIcon type={true ? "primary" : "secondary"} />,
    isActive: true,
  },
  {
    text: "Лента заказов",
    icon: <MenuIcon type={false ? "primary" : "secondary"} />,
  },
  {
    text: "Личный кабинет",
    icon: <ProfileIcon type={false ? "primary" : "secondary"} />,
    isRightMenu: true,
  },
];

const AppHeader = () => {
  return (
    <header className={styleClass.header}>
      <nav className={`${styleClass.nav} pt-4 pb-4`}>
        <MenuList menuList={menuItems} />
        <div className={styleClass.logo}>
          <Logo />
        </div>
        <MenuList menuList={menuItems} isRightMenu={true} />
      </nav>
    </header>
  );
};

export default AppHeader;
