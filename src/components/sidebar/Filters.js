import React from 'react'

function Filters() {
    return (
        <div>
            <div className="card-filter">
             <div className="card-filter-header">
                <b>Category</b>
            </div>
            <div className="card-filter-body">
            <input type="checkbox" defaultChecked /> All <br />
                <input type="checkbox" /> Mobiles <br />
                <input type="checkbox" /> Laptops <br />
                <input type="checkbox" /> Shirts <br />
                <input type="checkbox" /> Footwears <br />
                <input type="checkbox" /> Men's Collections <br />
                <input type="checkbox" /> Bags <br />
            </div>
               
            </div>

            <div className="card-filter">
             <div className="card-filter-header">
                <b>Price</b>
            </div>
            <div className="card-filter-body">
            <input type="checkbox" defaultChecked /> Below 500 <br />
                <input type="checkbox" />  500 - 2000 <br />
                <input type="checkbox" />  2000 - 10000 <br />
                <input type="checkbox" />  10000 - 50000 <br />
                <input type="checkbox" /> Above 50000 <br />
            </div>
               
            </div>
        </div>
    )
}

export default Filters
