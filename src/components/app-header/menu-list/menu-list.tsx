import IMenuItem from "../../../models/menu-item";
import MenuElement from "./menu-element/menu-element";

import styleClass from "./menu-list.module.css";

interface IProps {
  menuList: IMenuItem[];
  isRightMenu?: boolean;
}

const MenuList = (props: IProps) => {
  const { menuList, isRightMenu } = props;
  const memuPositionClass = isRightMenu
    ? `${styleClass.menu_right}`
    : `${styleClass.menu_left}`;

  return (
    <ul className={`${styleClass.menu} ${memuPositionClass}`}>
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
