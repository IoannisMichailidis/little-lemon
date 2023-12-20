import React from "react";

// Components
import {Nav} from '../components/common/nav/Nav';
import {MyBookings} from '../components/bookingpage/MyBookings';

// Styles
import '../styles/global.css';

export const MyBookingsPage = () => {

    return (
    <>
        <Nav/>
        <div style={{ paddingTop: '52px' }}/>
        <MyBookings/>
    </>
    )
}