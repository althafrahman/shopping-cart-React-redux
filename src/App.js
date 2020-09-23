import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Details from './pages/details/Details';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import store from "./redux/cart/store";


function App() {
  // console.log(store);
  
  return (
    <Provider store = {store}>
      <Router>
        <div className="App"  >
          <Header />
        </div>
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/cart' exact component={Cart} />
          <Route exact path='/details/:id' exact component={Details} />
        </Switch>
      </Router>

      
    </Provider>

  );
}

export default App;
