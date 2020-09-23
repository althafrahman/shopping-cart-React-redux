import { DECREMENT_COUNT } from "./actionType";

export const decrementAction = (prd_id) => {
    return {
        type : DECREMENT_COUNT,
        id : prd_id
    }
}