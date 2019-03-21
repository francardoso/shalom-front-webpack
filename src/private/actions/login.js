export const SET_IS_LOGGED = 'SET_IS_LOGGED';

export function setIsLogged(loginData){
    return {
        type: SET_IS_LOGGED,
        payload: loginData 
    }
}