import React, { Component } from 'react'
import logo from '../../logo.svg';
import Products from './Products';
class HomeContent extends Component {
    render() {
        return (
            <div>
                <nav className="todays-navbar">
                    <h5 className="todays-text">Todays Deals</h5>
                </nav>
                <Products />
            </div>
        )
    }
}

export default HomeContent
