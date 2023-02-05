import IMenuItem from "../../../models/menu-item";
import MenuElement from "./menu-element/menu-element";

import menuListStyle from "./menu-list.module.css";

interface IProps {
  menuList: IMenuItem[];
  isRightMenu?: boolean;
}

const MenuList = (props: IProps) => {
  const { menuList, isRightMenu } = props;
  const memuPositionClass = isRightMenu
    ? `${menuListStyle.menu_right}`
    : `${menuListStyle.menu_left}`;

  return (
    <ul className={`${menuListStyle.menu} ${memuPositionClass}`}>
      {menuList
        .filter((item) => item.isRightMenu === isRightMenu)
        .map((item, index) => {
          return (
            <MenuElement
              key={`menu-item-${index}`}
              text={item.text}
              isActive={item.isActive}
            >
              {item.icon}
            </MenuElement>
          );
        })}
    </ul>
  );
};

export default MenuList;
