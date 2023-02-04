import React, { Component } from 'react';

import IBurderIngredient from '../../../models/byrger-ingredient';
import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item';

import style from './burger-ingredients-list.module.css';

interface IProps {
    title: string,
    data: IBurderIngredient[]
}

class BurgerIngredientsList extends Component<IProps> {

    render() {
        const { data, title } = this.props;

        return <>
            <article>
                <h3 className='text text_type_main-large mb-5'>
                    { title }
                </h3>
                <section className={style.list}>
                    {
                        data.map(item => <BurgerIngredientsItem key={item._id} item={item} />)
                    }
                </section>
            </article>
        </>;
    }
}

export default BurgerIngredientsList;