import {
    FETCH_ITEMS,
    FETCH_ITEMS_DONE
} from '../actions/items';

const initialState = {
    loading: false,
    items: []
};

const itemsReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_ITEMS:
            return{
                ...state,
                loading: true
            };
        case FETCH_ITEMS_DONE:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        default:
            return state
    }
};

export default itemsReducer;