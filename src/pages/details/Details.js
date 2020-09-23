import React, { Component } from 'react'
import {storeproducts} from '../../components/homecontent/Data'
import DetailOne from './DetailOne'
class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products : storeproducts,
            match : false,
        }
    }
    render() {
        const {id} = this.props.match.params
        var details = this.state.products.find(product => product.id == id)
        return (
                    <div>
                        <DetailOne details={details}/>
                    </div>
                )
        
        
    }
}

export default Details
