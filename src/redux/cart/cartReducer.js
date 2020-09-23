import { INCREMENT_COUNT, DECREMENT_COUNT, ADD_TO_CART, REMOVE_ITEM } from "./actionType";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // ****
        // While incrementing the quantity from cart----

        case INCREMENT_COUNT:
            var indexs = state.cart.findIndex(cartz => (cartz.product_id == action.id))
            var back = Object.assign([], state.cart);
            back[indexs].quantity++
            return {
                ...state,
                cart: back
            }

        // Incrementing Ends----

        // ****
        // While Decreasing the quantity from cart----
        case DECREMENT_COUNT:
            var indexs = state.cart.findIndex(cartz => (cartz.product_id == action.id))
            var back = Object.assign([], state.cart);
            back[indexs].quantity--
            return {
                ...state,
                cart: back
            }
        // Decrementing Ends----

        // ****
        // While Decreasing the quantity from cart----
        case REMOVE_ITEM:
            var indexs = state.cart.findIndex(cartz => (cartz.product_id == action.id))
            var back = Object.assign([], state.cart);
            back.splice(indexs, 1);
            return {
                ...state,
                cart: back
            }
        // Decrementing Ends----

        // ****
        // While Click on add to cart----
        case ADD_TO_CART:
            return {
                ...state, cart: state.cart.concat({
                    product_id: action.id,
                    quantity: action.payload
                })
            }
        // Add to cart ends

        // ****
        // Default----
        default:
            return state;
    }
}

export default cartReducer