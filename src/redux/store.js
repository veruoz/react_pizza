import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// чтобы подключить несколько middleware нужно использовать composeEnhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk))
)


export default store
