import React from "react";

// Components
import {Nav} from '../components/common/nav/Nav';
import {AboutInfo} from '../components/aboutpage/AboutInfo';
import {AboutMap} from '../components/aboutpage/AboutMap';

// Styles
import './Aboutpage.css';
import '../styles/global.css';

export const AboutPage = () => {

    return (
    <>
        <Nav/>
        <div style={{ paddingTop: '52px' }}/>
        <main className="About">
            <section className="AboutHeaderContainer">
                <h2 className="title">About</h2>
            </section>
            <AboutInfo/>
            <AboutMap/>
        </main>
    </>
    )
}