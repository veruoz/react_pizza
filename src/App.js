import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import React from "react";
import axios from "axios";
// import store from "./redux/store";
// import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";
import {setPizzas} from "./redux/actions/pizzas";
import {useSelector, useDispatch} from "react-redux";
import './scss/app.scss';

function App() {
    const dispatch = useDispatch()
    // если идет получение данных из хранилища, то нужно указывать какие именно данные нужны, а не весь state и делать лишний ререндер
    const { items } = useSelector(({ pizzas, filters }) => {
        return {
            items:  pizzas.items,
        }
    })

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setPizzas(data.pizzas))
        })
    }, [dispatch])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render={() => <Home items={items}/>}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    )
}

export default App

