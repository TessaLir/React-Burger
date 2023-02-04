import { ReactElement } from "react";

export default interface IMenuItem {
    icon: ReactElement,
    text: string,
    isRightMenu?: boolean,
    isActive?: boolean
}