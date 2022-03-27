import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import React from "react";
import axios from "axios";
// import store from "./redux/store";
// import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";
import {setPizzas} from "./redux/actions/pizzas";
import { useDispatch} from "react-redux";
import './scss/app.scss';

function App() {
    const dispatch = useDispatch()

    // Перенести в redux  и подключить redux-thunk
    // Следить за фильтрацией и сортировкой, подставлять параметры в url из redux
    // сделать имитацию загрузки пицц (которая есть в css
    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            // console.log(data)
            dispatch(setPizzas(data))
        })
    }, [dispatch])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    )
}

export default App

