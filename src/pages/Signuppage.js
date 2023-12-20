import React from "react";

// Components
import { SignupForm } from '../components/signuppage/SignupForm';
import { Nav } from "../components/common/nav/Nav";

// Styles
import '../styles/global.css';

export const SignupPage = () => {

    return (
    <>
        <Nav/>
        <SignupForm/>
    </>
    )
}