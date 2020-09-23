import React, { Component } from 'react'
import './styles.css'
import Filters from './Filters'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav className="filter-navbar">
                    <h5 className="todays-text">Filters</h5>
                    <p><i className="fa fa-filter"></i></p>
                </nav>
                <Filters />
            </div>
        )
    }
}

export default Sidebar
