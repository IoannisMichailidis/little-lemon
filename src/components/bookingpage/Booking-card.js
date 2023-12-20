import React from "react";

// Styles
import './Booking-card.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faClock,
    faUsers,
    faGift
  } from "@fortawesome/free-solid-svg-icons";

export const Booking = ({date,time,guests,occasion}) => {

    return (
        <article>
            <div className="dateTimeInfo">
                <div className="dateInfo">
                    <FontAwesomeIcon icon={faCalendarDays} size="xl"/>
                    <p >{date}</p>
                </div>
                <div className="timeInfo">
                    <FontAwesomeIcon icon={faClock} size="xl" />
                    <p >{time}</p>
                </div>
            </div>
            <div className="guestsOccasionInfo">
                <div className="guestsInfo">
                    <FontAwesomeIcon icon={faUsers} size="xl"/>
                    <p >{guests}</p>
                </div>
                <div className="occasionInfo">
                    <FontAwesomeIcon icon={faGift} size="xl" />
                    <p >{occasion}</p>
                </div>
            </div>
        </article>
    )
}