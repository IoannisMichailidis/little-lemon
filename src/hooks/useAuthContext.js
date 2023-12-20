import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    // Check if the context is used in the scope
    if(!context) {
        throw Error('useAuthContext must be inside the AuthContextProvider');
    }

    return context;
}