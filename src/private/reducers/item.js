import {
    FETCH_ITEM,
    FETCH_ITEM_DONE,
    UPDATE_ITEM
} from '../actions/item';

const initialState = {
    loading: false,
    item: {}
};

const itemReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_ITEM:
            return {
                ...state,
                loading: true
            }
        case FETCH_ITEM_DONE:
            return {
                ...state,
                loading: false,
                item: action.payload
            }
        case UPDATE_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
};

export default itemReducer;