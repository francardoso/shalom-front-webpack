export const FETCH_ITEM = "FETCH_ITEM";
export const FETCH_ITEM_DONE = "FETCH_ITEM_DONE";

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