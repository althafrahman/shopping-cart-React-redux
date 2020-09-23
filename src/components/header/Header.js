import React, { Component } from 'react'
import logo from '../../logo.svg';
import '../header/styles.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>

                <nav className="navbars">
                    <div className="navbar-search">
                        <img alt="No Search" width="50px" src={logo}/>
                        <Link to="/" className="linktohome"><span className="store-name">React Store</span></Link>
                        <input type="text" placeholder="Search Product.." name="search-data" className="search-box" />
                        <img alt="No Search" src="https://img.icons8.com/material-sharp/24/000000/search.png"/>
                    </div>
                    <div className="navbars-link">
                    <Link to = "/cart"><i className="fas fa-shopping-cart"></i> Cart</Link>
                    </div>
                </nav>
                
            </header>
        )
    }
}

export default Header

