import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        // Log the user out
        try {
            await projectAuth.signOut();

            // Dispatch the LOGOUT action to update the satte with user euqal to null
            dispatch({ type: 'LOGOUT' });

            // update the state
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }

        }
        catch(err) {
            // update the state only if the component is not unmoutned
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    // Adding cleanup function. That will run when the logout function is called.
    // If we unmount the component while we have trigger the async action then the clean up function will be fired
    // So, the local state will not update when we will get the results. And that's will make us not getting an error 
    // trying to update state for a component that has been unmounted because we will be in another page.
    useEffect(() => {
        return () => setIsCancelled(true)
    })

    return { logout, error, isPending }
}