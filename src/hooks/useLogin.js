import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {

        return new Promise(async (resolve, reject) => {
            setError(null);
            setIsPending(true);
            try {
                const response = await projectAuth.signInWithEmailAndPassword(email, password);
                dispatch({ type: 'LOGIN', payload: response.user });
                setIsPending(false);
                resolve();
            } catch (err) {
                setError(err.message);
                setIsPending(false);
                reject(err);
            }
        });
    }

    return {error, isPending, login};
}