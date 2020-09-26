import React, { Component } from 'react'
import './styles.css'
import { storeproducts } from "../../components/homecontent/Data";
import { connect } from "react-redux";
import { decrementAction } from "../../redux/cart/decrementCart";
import { incrementAction } from "../../redux/cart/incrementCart";
import { removeItem } from "../../redux/cart/removeItem";

class CartItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: storeproducts
        }
    }


    render() {
        // console.log(this.props);
        var cartItem = this.props.cart.map(cartz => (cartz))
        var lists = [];
        var delivery = 25;
        var total = 0;
        for (let i = 0; i < cartItem.length; i++) {
            lists[i] = this.state.products.find(pro => (pro.id == cartItem[i].product_id))
            lists[i].quantity = cartItem[i].quantity
            total = total + (cartItem[i].quantity * lists[i].price)
        }
        
        return (
            <div>
                <div className="">
                    {/* <table className="table table-light table-bordered">
                        <thead><tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th></th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr></thead>
                        <tbody>
                            {
                                lists.map(cartProd => (
                                    <tr key={cartProd.id}>
                                        <td>1</td>
                                        <td>{cartProd.name}</td>
                                        <td><img className="image-sizes" src={cartProd.imgUrl} alt="No Image" /></td>
                                        <td>{cartProd.price}</td>
                                        <td><button onClick = {() => this.props.decrementAction(cartProd.id)}><i className = "fas fa-minus"></i></button><input type="number" value={cartProd.quantity} className="quantity_input" readOnly/><button onClick={() => this.props.incrementAction(cartProd.id)}><i className = "fas fa-plus"></i></button></td>
                                        <td>{cartProd.quantity * cartProd.price}</td>
                                        <td><button onClick = {() => this.props.removeItem(cartProd.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button></td></tr>
                                ))}
                        </tbody>

                    </table> */}
                    <div className="cart-main" >
                        <div className="left-content ">
                            <div className="card">
                                <div className="card-header">
                                    <span>MY CART</span>
                                    <span><i className="fas fa-map-marker"></i> Deliver to <span className="pincode">683563</span></span>
                                </div>
                                <div className="card-body cart-items-row">
                                    {lists.map(cartProd => (
                                        <div className="row ">
                                            <div className="col-md-3">
                                                <img className="image-sizes" src={cartProd.imgUrl} alt="No Image" /><br />
                                                <button className = "btn-adjust" onClick={() => this.props.decrementAction(cartProd.id)}><i className="fas fa-minus"></i></button><input type="number" value={cartProd.quantity} className="quantity_input" readOnly /><button className = "btn-adjust" onClick={() => this.props.incrementAction(cartProd.id)}><i className="fas fa-plus"></i></button>
                                            </div>
                                            <div className="col-md-6">
                                                <h4>{cartProd.name}</h4>
                                                <p className="description-text">{cartProd.description}</p>
                                                <p className="green-line"><del>$2000</del> ${cartProd.price}</p>
                                                <p className="description-text"><b>Quantity : </b>{cartProd.quantity}</p>
                                                <p className = "remove-cart" onClick = {() => this.props.removeItem(cartProd.id)} >REMOVE</p>
                                            </div>
                                            <div className="col-md-3">
                                                <span>Unit Price : ${cartProd.price}</span> <br />
                                                <span>Quanity : {cartProd.quantity}</span><br />
                                                <hr />
                                                <span><h5>Total : ${cartProd.quantity * cartProd.price}</h5></span>
                                            </div>
                                            <hr />
                                        </div>

                                    ))}

                                </div>
                                <div className="card-footer">
                                    <span></span>
                                    <span><button className="btn btn-place-order">Place Order</button></span>
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="card">
                                <div className="card-header">
                                        <span>Price Details</span>
                                </div>
                                <div className="card-body">
                                        <span><b>Total ({lists.length} items)</b> : ${total}</span> <br />
                                        <span><b>Delivery Charge : </b> ${delivery}</span> <br />
                                        <hr />
                                        <span><b>Sub Total : </b> {total + delivery}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (states) => {
    return {
        cart: states.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrementAction: (prd_id) => dispatch(decrementAction(prd_id)),
        incrementAction: (prd_id) => dispatch(incrementAction(prd_id)),
        removeItem: (prd_id) => dispatch(removeItem(prd_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)