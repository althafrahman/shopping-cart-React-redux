import React, { Component } from 'react'
import './styles.css'
import { Link, Redirect } from "react-router-dom";
import { storeproducts } from './Data'
import { addToCart } from "../../redux/cart/addToCart";
import { connect } from "react-redux";
class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: storeproducts,
            selProd: 1,
            isRedirect: false
        }
    }
    
    

    detailsHandler = (id) => {
        this.setState({
            selProd: id,
            isRedirect: true
        });
    }

    render() {
        // console.log(this.props);
        
        if (this.state.isRedirect) {
            return <Redirect push to={"/details/" + this.state.selProd} />
        }

        return (
            <div>
                <div className="row">
                    {this.state.products.map((product) => (

                        <div key={product.id} className="col-3  text-center">
                            <a className="to-details" onClick={() => this.detailsHandler(product.id)}>
                                <div className="image-sizes zoom">
                                    <img alt="No Search" src={product.imgUrl} />
                                </div>
                                <div className="details-product">
                                    <p><b>{product.name}</b></p>
                                    <p className="price">$ {product.price}</p>
                                </div>
                            </a>
                            <button onClick = {() => this.props.addToCart(1, product.id)} className="btn btn-add-to-cart">Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart : (quantity, prd_id) => dispatch(addToCart(quantity, prd_id))
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Products)
