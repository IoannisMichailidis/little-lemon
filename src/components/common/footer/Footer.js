import React from "react";
import { Link } from 'react-router-dom';

// Custom Hooks
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogout } from "../../../hooks/useLogout";

// Images
import Logo from "../../../images/Logo.svg"

// Styles
import './Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquareTwitter,
  } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <footer className="Footer">
            <section className="FooterImageContainer">
                <img src={Logo} alt="footer"/>
            </section>
            <section className="FooterNavTitleContainer">
                <div>
                    <h5>Doormat Navigation</h5>
                </div>
            </section>
            <section className="FooterNavContentContainer">
                <div>
                    <ul>
                        <li>
                            <Link to="/" className="nav-item"><p>Home</p></Link>
                        </li>
                        <li>
                            <Link to="/menu" className="nav-item"><p>Menu</p></Link>
                        </li>                        
                        <li>
                        <Link to="/about" className="nav-item"><p>About</p></Link>
                        </li>
                        <li>
                            <Link to="/booking" className="nav-item"><p>Reserve</p></Link>
                        </li>

                        {!user ?
                            <>
                                <li>
                                    <Link to="/login" className="nav-item"><p>Login</p></Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="nav-item"><p>Sign up</p></Link>
                                </li>
                            </>
                        :
                            <>
                                <li>
                                    <Link to="/mybookings" className="nav-item"><p>MyBookings</p></Link>
                                </li>
                                <li>
                                    <Link to="/review" className="nav-item"><p>Review</p></Link>
                                </li>
                                <li>
                                    <Link to="/" className="nav-item" onClick={logout}><p>Logout</p></Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </section>
            <section className="FooterContactTitleContainer">
                    <h5>Contact</h5>
            </section>
            <section className="FooterContactContentContainer">
                <div className="FooterContactContentContainerRow">
                    <p>Address: Karaiskaki 19, Thessaloniki</p>
                    <p>Phone number: 2310 261594</p>
                    <p><a href="mailto: liitle_lemon@gmail.com">Email: liitle_lemon@gmail.com</a></p>
                </div>
            </section>
            <section className="FooterSocialMediaTitleContainer">
                <div>
                    <h5>Social Media Links</h5>
                </div>
            </section>
            <section className="FooterSocialMediaContentContainer">
                <div className="FooterSocialMediaContentContainerRow">
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
        </footer>
    )
}