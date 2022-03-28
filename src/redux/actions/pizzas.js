import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

// dispatch здесь использовать не получится, поэтому надо использовать библиотеку middleware redux-thunk, которая работает асинхронно в отличие от самого redux
// отправка асинхронного action dispatch
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    // любой новый запрос переводит isLoading: false
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        // console.log(data)
        dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})


