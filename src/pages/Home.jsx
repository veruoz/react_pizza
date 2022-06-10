import React from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filter";
import {fetchPizzas} from "../redux/actions/pizzas";

// вынесли название категорий за пределы функции Home поскольку они каждый раз обновляются и заставляют ререндериться App
const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
]

const Home = () => {
    const dispatch = useDispatch()
    // вытащили получение пицц из App и оставили там только dispatch
    const items = useSelector(({ pizzas }) => pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)
    // сокращенная запись
    // const { items } = useSelector(({ pizzas }) => {
    //     return {
    //         items:  pizzas.items,
    //     }
    // })

    // получение новых пицц
    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [sortBy, category])

    // для того чтобы не создавать новую функцию, поскольку она всегда будет новая в событии onClick нужно определить заранее функцию и на нее ссылаться
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    // функция для передачи данных в корзину
    const handleAddPizzaToCart = obj => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj
        })
        console.log(obj)
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={onSelectCategory}
                            items={categoryNames}
                            activeCategory={category}
                />
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(obj => (
                        // прокидывание пропсов
                        // <PizzaBlock key={obj.id} name={obj.name} imageUrl={obj.imageUrl}/>
                        // <PizzaBlock key={obj.id} obj={obj} />
                        // все свойства пробрасываются
                        <PizzaBlock
                            // onClickAddPizza={(obj) => console.log(obj)}
                            onClickAddPizza={handleAddPizzaToCart}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}
                        />
                    )) : Array(12).fill(0).map((_, index) => (<PizzaLoadingBlock key={index}/>))
                }
            </div>
        </div>

    );
};

export default Home;
