import { REMOVE_ITEM } from "./actionType";

export const removeItem = (prd_id) => {
    return {
        type : REMOVE_ITEM,
        id : prd_id
    }
}