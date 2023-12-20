
import React from "react";

// Styles
import './AboutInfo.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquareTwitter,
  } from "@fortawesome/free-brands-svg-icons";

export const AboutInfo = () => {

    return (
        <section className="AboutInfo">
                <div className="contactInfo">
                    <h2>Contact</h2>
                    <p>Address: Karaiskaki 19, Thessaloniki</p>
                    <p>Phone number: 2310 261594</p>
                    <a href="mailto: liitle_lemon@gmail.com">
                        <p>Email: liitle_lemon@gmail.com</p>
                    </a>
                </div>
                <div className="socialMediaInfo">
                    <h2>Social Media</h2>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareFacebook} size="2xl"/>
                    </a>
                    <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareInstagram} size="2xl"/>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareTwitter} size="2xl" />
                    </a>
                </div>
        </section>
    )
}
