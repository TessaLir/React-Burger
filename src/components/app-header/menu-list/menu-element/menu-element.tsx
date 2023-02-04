import React, { Component, ReactElement } from 'react';

import menuElementStyle from './menu-element.module.css';

interface IProps {
    children: ReactElement | ReactElement[],
    text: string,
    isActive?: boolean
}

class MenuElement extends Component<IProps> {
    render() {
        const { children, text, isActive } = this.props;
        return <>
            <li className={`${menuElementStyle.item} p-5`}>
                { children }
                <p 
                    className='text text_type_main-default ml-2' 
                    style={{ color: isActive ? '#F2F2F3' : '#8585AD' }} 
                >
                    { text }
                </p>
            </li>
        </>;
    }
}

export default MenuElement;