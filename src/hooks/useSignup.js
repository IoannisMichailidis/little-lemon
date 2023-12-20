import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    // const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();


    // const signup = async (displayName, email, password) => {
    const signup = async (displayName, email, password) => {

        return new Promise(async (resolve, reject) => {
        setError(null);
        setIsPending(true);

            try {
                // Create user
                const response = await projectAuth.createUserWithEmailAndPassword(email,password);

                // add the displayName to the user
                await response.user.updateProfile({ displayName });

                // Dispatch the LOGIN action to update the state with the new user
                dispatch({ type: 'LOGIN', payload: response.user})

                // update the state only if the component is not unmoutned
                setIsPending(false);
                setError(null);
                resolve();
            }
            catch (err) {
                // update the state only if the component is not unmoutned
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
                reject(err);
            }
        });
    }

    return {error, isPending, signup};
}