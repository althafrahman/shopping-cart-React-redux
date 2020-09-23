import { INCREMENT_COUNT } from "./actionType";

export const incrementAction = (prd_id) => {
    return {
        type : INCREMENT_COUNT,
        id : prd_id
    }
}