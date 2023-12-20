import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

// Styles
import './BookingConfirmation.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight
  } from "@fortawesome/free-solid-svg-icons";

export const BookingConfirmation = () => {
    const location = useLocation();
    const bookingData = location.state && location.state.bookingData;

    if (!bookingData) {
        // Handle the case where bookingData is not available
        return(
            <main className="ConfirmationContainer">
                <section className="ConfirmationContentContainer">
                    <p className="errorTitle"> <b>Something went wrong!</b></p>
                </section>
             </main>
        );
      }

    return (
        <main className="ConfirmationContainer">
            <section className="ConfirmationContentContainer">
                <p className="successTitle"> <b>Your resarvation has been booked successfully!</b></p>
                <p>Date: {location.state.bookingData.date} </p>
                <p>Time: {location.state.bookingData.time}</p>
                <p>Guests: {location.state.bookingData.guests}</p>
                <p>Occasion: {location.state.bookingData.occasion}</p>
                <Link to="/mybookings" className='myBookingsButtonLink'>
                    <div className="myBookingsButton">
                        <p>My bookings</p>
                        <FontAwesomeIcon icon={faArrowRight} size="xl"/>
                    </div>
                </Link>
            </section>
        </main>

    )
}