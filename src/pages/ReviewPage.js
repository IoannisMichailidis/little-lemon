import React from "react";

// Components
import {Nav} from '../components/common/nav/Nav';
import { ReviewForm } from '../components/reviewpage/ReviewForm';

// Styles
import '../styles/global.css';

export const ReviewPage = () => {

    return (
    <>
        <Nav/>
        <div style={{ paddingTop: '52px' }}/>
        <ReviewForm/>
    </>
    )
}