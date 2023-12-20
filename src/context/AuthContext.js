import { createContext, useReducer, useEffect } from 'react';
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload}
        case 'LOGOUT' :
            return { ...state, user: null}
        case 'AUTH_IS_READY':
            return { ...state, user: action.payload, authIsReady: true}
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        // Initial state
        user: null,
        authIsReady:false  // Use this one to make sure that the app renders only when this one is true. Otherwise we will see the nav bar displays values for loged in users and then for logged out.
    })

    // That is the first thing which fires when the app renders
    // used to make sure that the loged in user doesn't log out when we refresh the page
    useEffect(() => {
        // This function fires when there is a authentication change. So, if the user logs out then this function will fire
        // we store this function to the unsubscribe to make sure that it will run just once (when the app is reload). 
        const unsub =projectAuth.onAuthStateChanged((user) => { // user = null if the user logs out
             dispatch({ type: 'AUTH_IS_READY', payload: user})
             unsub();
        })
    },[])

    console.log('AuthContext state: ', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}