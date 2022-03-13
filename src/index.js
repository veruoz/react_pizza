import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Button} from "./components";

const inc = () => {
    store.dispatch({
        type: 'ПРИБАВИТЬ'
    })
}

store.subscribe(() => {
    console.log('изменился', store.getState())
})

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Button onClick={inc}>+1</Button>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

