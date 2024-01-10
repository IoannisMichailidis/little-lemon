import React from "react";
import { Link } from "react-router-dom";

// Custom Hooks
import { useAuthContext } from "../../../hooks/useAuthContext";

// Videos
import HeaderVideo from "../../../videos/headerVideo.mp4"

// Styles
import './Header.css';

export const Header = () => {
    const { user } = useAuthContext();

    return (
        <header >
             <section className="Header">
                        <section className="HeaderDescription">
                            <article>
                                <h2 className="title">Little Lemon</h2>
                                <p className="lead-text"> Savor the Moment of Exquisite Dining</p>
                                <p>Join us for a delightful culinary journey where every dish tells a story. Indulge in our passion for exceptional flavors and create unforgettable memories. We're thrilled to have you here!</p>
                            </article>
                            <div>
                                <Link to={user ? "/booking":"/login"}>
                                    <button aria-label="On Click" className='CustomButton'>Reserve a Table</button>
                                </Link>
                            </div>
                        </section>
                    <section className="HeaderVideo">
                    <video autoPlay loop muted>
                        <source src={HeaderVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="VideoOverlay"></div>
                </section>
            </section>
        </header>
    );
}

