import { useEffect, useState } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import IMenuItem from "./../../models/menu-item";
import MenuList from "./menu-list/menu-list";
import { menuItems } from "./../../helpers/SD";

import styleClass from "./app-header.module.css";

const AppHeader = () => {
  const [menu, setMenu] = useState<IMenuItem[]>([]);

  useEffect(() => {
    setMenu(menuItems);
  }, []);

  return (
    <header className={styleClass.header}>
      <nav className={`${styleClass.nav} pt-4 pb-4`}>
        <MenuList menuList={menu} />
        <div className={styleClass.logo}>
          <Logo />
        </div>
        <MenuList menuList={menu} isRightMenu={true} />
      </nav>
    </header>
  );
};

export default AppHeader;
