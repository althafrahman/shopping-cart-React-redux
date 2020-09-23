import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom";
import { addToCart } from "../../redux/cart/addToCart";
import { connect } from "react-redux";
import './styles.css'

class DetailOne extends Component {
    render() {
        const {description, id, imgUrl, name, price} = this.props.details
        return (
            <div>
                <div className="row details">
                    <div className="col-6 img-div">
                        <img alt ="No Images Here" src = {imgUrl} />
                    </div>
                    <div className="col-6">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h5 className = "green-line"><i className = "red-line"><del>$2000</del></i> ${price}</h5>
                    <p className="orange-text"><i>75% offer</i></p>

                    <ul>
                        <li>Free Shipping</li>
                        <li>Cash On Delivery</li>
                    </ul>

                    <div className="btn-class">
                        <Link to="/" className="btn back-to-product">Back to Products</Link>
                        <button type="button" onClick = {() => this.props.addToCart(1, id)} className="btn btn-add-to-cart">Add To Cart</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart : (quantity, prd_id) => dispatch(addToCart(quantity, prd_id))
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(DetailOne)
