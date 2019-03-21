export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_DONE = 'FETCH_ITEMS_DONE';

export function fetchItems (){
    return{
        type: FETCH_ITEMS
    }
}

export function fetchItemsDone (items){
    return{
        type: FETCH_ITEMS_DONE,
        payload: items
    }
}