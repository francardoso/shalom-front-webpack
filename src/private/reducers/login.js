import {
    SET_IS_LOGGED
} from '../actions/login';

const initialState = {
    userId: null,
    isLogged: null
};

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_IS_LOGGED:
            return {
                ...state,
                isLogged: action.payload.isLogged,
                userId: action.payload.userId
            };
        default:
            return state;
    }
};

export default loginReducer;