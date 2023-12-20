import React from "react";

// Components
import {Nav} from '../components/common/nav/Nav';
import {BookingConfirmation} from '../components/bookingpage/BookingConfirmation';

// Styles
import '../styles/global.css';

export const ConfirmationPage = () => {

    return (
    <>
        <Nav/>
        <div style={{ paddingTop: '52px' }}/>
        <BookingConfirmation/>
    </>
    )
}