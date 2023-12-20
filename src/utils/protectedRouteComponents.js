import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


export const BookingProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();
    if (!user) {
      // User not logged in, redirect to login page
      return <Navigate to="/login" />;
    }
  
    // User is logged in, render the children components
    return children;
  }
  
export  const ReviewProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();
  
    if (!user) {
      // User not logged in, redirect to login page
      return <Navigate to="/login" />;
    }
  
    // User is logged in, render the children components
    return children;
  }
  
export  const LoginSignupProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();
  
    if (user) {
      // User not logged in, redirect to login page
      return <Navigate to="/" />;
    }
  
    // User is logged in, render the children components
    return children;
  }
