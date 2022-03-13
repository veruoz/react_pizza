import {createStore} from "redux";


function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'ПРИБАВИТЬ':
        // case 'counter/incremented':
            return { value: state.value + 1 }
        case 'ОТНЯТЬ':
        // case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

const store = createStore(counterReducer)

export default store
