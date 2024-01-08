import React, { useState, useEffect }  from "react";
import {Link} from 'react-router-dom';

// Custom Hooks
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";

// Images
import Logo from "../../../images/Logo.svg"
import BurgerIcon from "../../../images/icon _hamburger menu.svg";

// Styles
import './Nav.css';

export const Nav = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    console.log(user);
    const logo = {
        title: 'little-lemon',
        image: Logo
    }

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth <= 800) {
            setShowMenu(!showMenu);
        }
    };

    // That makes sure that the burger is replaced by the initial nav when the screen gets increased in size while the burger menu is open
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800 && showMenu) {
                setShowMenu(false);
            }
        };
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, [showMenu]);

    return (
    <nav>
        <div className="Nav">
            <div className="NavLogo">
                <Link to="/" className="nav-item">
                    <img src = {logo.image} alt={logo.title} />
                </Link>
            </div>
                {/* Conditionally render NavNav based on showMenu state */}
                {/* Big Screens */}
                {showMenu ? null : (
                    <div className="NavNav">
                        <ul className="NavNavList">
                            <li>
                                <Link to="/" className="nav-item">Home</Link>
                            </li>
                            <li>
                                <Link to="/menu" className="nav-item">Menu</Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-item">About</Link>
                            </li>
                            <li>
                                <Link to="/booking" className="nav-item">Reserve</Link>
                            </li>


                            { !user && (
                                <>
                                    <li>
                                        <Link to="/login" className="nav-item">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className="nav-item">Sign up</Link>
                                    </li>
                                </>
                            )}
                            { user && (
                                <>
                                    <li>
                                        <Link to="/mybookings" className="nav-item">MyBookings</Link>
                                    </li>
                                    <li>
                                        <Link to="/review" className="nav-item">Review</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="nav-item" onClick={logout}>Logout</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
                {/* Small Screen */}
                {/* SVG Burger Icon */}
                <div className="BurgerIcon" onClick={toggleMenu} >
                    <img src={BurgerIcon} alt="burger"/>
                </div>
                {/* Dropdown Menu */}
                <nav className={`NavMenu ${showMenu ? 'open' : ''}`}>
                    {/* Add your navigation links here */}
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/booking" className="nav-item">Reserve</Link>
                    { !user && (
                        <>
                            <Link to="/login" className="nav-item">Login</Link>
                            <Link to="/signup" className="nav-item">Sign up</Link>
                        </>
                    )}
                    { user && (
                        <>
                            <Link to="/mybookings" className="nav-item">MyBookings</Link>
                            <Link to="/review" className="nav-item">Review</Link>
                            <Link to="/" className="nav-item" onClick={logout}>Logout</Link>
                        </>
                    )}
                </nav>
        </div>
    </nav>
    )
};


