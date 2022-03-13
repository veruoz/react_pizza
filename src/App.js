import './scss/app.scss';
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import React, {useState} from "react";

function App() {

    // fetch
    const [pizzas, setPizzas] = useState([]);
    React.useEffect(() => {
        fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
            setPizzas(json.pizzas)
        })
    }, [])

    // console.log(pizzas)
    return (
        <div className="wrapper">
            <Header/>
            {/*<Button name='Press' />*/}
            {/*<Button name='noPress' outline/>*/}
            <div className="content">
                <Route exact path='/' render={() => <Home items={pizzas} />}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;
