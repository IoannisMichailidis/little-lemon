import React from "react";

// Components
import { LoginForm } from '../components/loginpage/LoginForm';
import { Nav } from "../components/common/nav/Nav";

// Styles
import '../styles/global.css';

export const LoginPage = () => {

    return (
    <>
        <Nav/>
        <LoginForm/>
    </>
    )
}