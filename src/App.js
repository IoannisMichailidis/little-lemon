import { Routes, Route } from 'react-router-dom';

// Context
import { useAuthContext } from './hooks/useAuthContext';

// Components
import {HomePage} from './pages/Homepage';
import {BookingPage} from './pages/Bookingpage';
import {ConfirmationPage} from './pages/Confirmationpage';
import {ProductDetailsPage} from './pages/ProductDetailspage';
import {ReviewPage} from './pages/ReviewPage';
import {LoginPage} from './pages/Loginpage';
import {SignupPage} from './pages/Signuppage';
import { MyBookingsPage } from './pages/MyBookingspage';
import { AboutPage } from './pages/Aboutpage';
import { MenuPage } from './pages/Menupage';

// Protected Route Components
import {BookingProtectedRoute} from './utils/protectedRouteComponents';
import {ReviewProtectedRoute} from './utils/protectedRouteComponents';
import {LoginSignupProtectedRoute} from './utils/protectedRouteComponents';

// Styles
import './styles/global.css';



const App = () => {
  const { authIsReady } = useAuthContext();
  return (
    < >
      {authIsReady && (
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/menu" element={<MenuPage/>} />
          <Route path="/:id" element={<ProductDetailsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route
            path="/booking"
            element={
              <BookingProtectedRoute>
                <BookingPage/>
              </BookingProtectedRoute>}
          />
          <Route path="/confirmation" element={<ConfirmationPage/>} />

          <Route 
            path="/mybookings" 
            element=
            {<BookingProtectedRoute>
              <MyBookingsPage/>
             </BookingProtectedRoute>} 
          />

          <Route 
            path="/review" 
            element={
              <ReviewProtectedRoute>
                <ReviewPage/> 
              </ReviewProtectedRoute>} 
          />
          <Route 
            path="/login" 
            element={
              <LoginSignupProtectedRoute>
                <LoginPage/>
                </LoginSignupProtectedRoute>}
          />
          <Route 
            path="/Signup" 
            element={
            <LoginSignupProtectedRoute>
              <SignupPage/>
              </LoginSignupProtectedRoute>} 
          />
        </Routes>
      )}
    </>
  );
};

export default App;
