const initialState = {
    category: null,
    sortBy:   {
        type: 'popular',
        order: 'desc'
    },
}

const filters = (state = initialState, action) => {
    // происходит следующее: если тип совпадает, то берется значение action sortBy и добавляется к state взять все старые свойства перед этим.
    // или верни прежние значения return state
    // action = {
    //     type:    'SET_SORT_BY', фильтр по типу
    //     payload: 'price' меняется на это
    // }
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload
        }
    }
    return state
}

export default filters
