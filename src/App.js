import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import React from "react";
import axios from "axios";
import store from "./redux/store";
// import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";
import {setPizzas} from "./redux/actions/pizzas";
import {connect} from "react-redux";
import './scss/app.scss';


// function App() {
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//     }, [])
//
//     return (
//     );
// }

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            // console.log(setPizzas(data.pizzas))
            // this.props.dispatch(setPizzasAction(data.pizzas))
            this.props.setPizzas(data.pizzas)
        })
    }

    render() {
        // console.log(this.props)
        return <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    }
}
// достает данные из store и пропихивает в props App
const mapStateToProps = (state) => {
    // console.log(state, 'mapStateToProps')
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
}
// если // import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";
// const mapDispatchToProps = dispatch => {
//     return {
//         setPizzas: (items) => dispatch(setPizzasAction(items)),
//         // setPizzas: (items) => dispatch(setPizzasAction(items)),
//         // dispatch,
//     }
// }

// короткая версия записи mapDispatchToProps если action и метод в props одинаковый
// функция возьмет action обернет в диспач и передаст в пропсах
const mapDispatchToProps = {
    setPizzas,
}

// App connect должен следить за изменениями в хранилище store
export default connect(mapStateToProps, mapDispatchToProps)(App);
