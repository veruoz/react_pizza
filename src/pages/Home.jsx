import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filter";

// вынесли название категорий за пределы функции Home поскольку они каждый раз обновляются и заставляют ререндериться App
const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
]

const Home = () => {
    // вытащили получение пицц из App и оставили там только dispatch
    const items = useSelector(({ pizzas }) => pizzas.items)
    // сокращенная запись
    // const { items } = useSelector(({ pizzas }) => {
    //     return {
    //         items:  pizzas.items,
    //     }
    // })

    const dispatch = useDispatch()

    // для того чтобы не создавать новую функцию, поскольку она всегда будет новая в событии onClick нужно определить заранее функцию и на нее ссылаться
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory}
                            items={categoryNames}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(obj => (
                        // прокидывание пропсов
                        // <PizzaBlock key={obj.id} name={obj.name} imageUrl={obj.imageUrl}/>
                        // <PizzaBlock key={obj.id} obj={obj} />
                        // все свойства пробрасываются
                        <PizzaBlock key={obj.id} {...obj}  />
                    ))
                }

            </div>
        </div>

    );
};

export default Home;
