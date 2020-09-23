import { ADD_TO_CART } from "./actionType";

export const addToCart = (quantity, prd_id) => {
    return {
        type : ADD_TO_CART,
        payload : quantity,
        id : prd_id
    }
}