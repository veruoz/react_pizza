// Action Creator функция которая создает экшн
const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name
})
// пример отличие Action без динамической передачи данных через payload
// const setSortBy = ({
//     type: 'SET_SORT_BY',
// })

const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})

