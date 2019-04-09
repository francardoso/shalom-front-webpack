export const FETCH_ITEM = "FETCH_ITEM";
export const FETCH_ITEM_DONE = "FETCH_ITEM_DONE";
export const UPDATE_ITEM = "UPDATE_ITEM";

export function fetchItem(){
    return{
        type: FETCH_ITEM
    }
};

export function fetchItemDone(item){
    return {
        type: FETCH_ITEM_DONE,
        payload: item
    }
};

export function updateItem(item){
    return {
        type: UPDATE_ITEM,
        payload: item
    }
}