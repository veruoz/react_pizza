const initialState = {
    items:      {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newItems = {
                ...state.items,
                // работа с redux без библиотеки immer
                [action.payload.id]:
                // проверка на undefined если в массиве ничего еще нет - добавляем новый объект, а если есть - старый+новый
                    !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allPizzas = [].concat.apply([], Object.values(newItems))
            const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)
            return {
                ...state,
                items: newItems,
                // берется актуальное значение количества добавленных пицц
                // totalCount: Object.keys(newItems).length,
                // добавление типов пицц и количество каждого типа
                totalCount: allPizzas.length,
                totalPrice
            }
        }
        // case 'SET_TOTAL_COUNT':
        //     return {
        //         ...state,
        //         totalCount: action.payload
        //     }
        default:
            return state
    }
}

export default cart
