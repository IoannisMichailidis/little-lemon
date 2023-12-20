import React from "react";

// Components
import {BookingForm} from '../components/bookingpage/BookingForm';
import {Nav} from '../components/common/nav/Nav';

// Styles
import '../styles/global.css';

export const BookingPage = () => {

    return (
    <>
        <Nav/>
        <div style={{ paddingTop: '52px' }}/>
        <BookingForm/>
    </>
    )
}