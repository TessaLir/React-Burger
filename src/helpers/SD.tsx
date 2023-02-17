import {
  BurgerIcon,
  MenuIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IMenuItem from "../models/menu-item";

const apiGetDataPath = "https://norma.nomoreparties.space/api/ingredients";
const apiPostSendOrderPath = "https://norma.nomoreparties.space/api/orders";

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

const tabs: { key: string; text: string }[] = [
  {
    key: "bun",
    text: "Булки",
  },
  {
    key: "sauce",
    text: "Соусы",
  },
  {
    key: "main",
    text: "Начинки",
  },
];

export { apiGetDataPath, apiPostSendOrderPath, menuItems, tabs };
