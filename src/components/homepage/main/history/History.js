import React from "react";

// Images
import RestaurantImage1 from "../../../../images/Mario and Adrian A.jpg"
import RestaurantImage2 from "../../../../images/Mario and Adrian b.jpg"

// Styles
import './History.css';

export const History = () => {


    return (
        <section className="HistoryContainer">
            <div className="HistoryHeaderContainer">
                <h2 className="title">Little Lemon</h2>
                <p className="subtitle">Thessaloniki</p>
            </div>
            <div className="HistoryDescriptionContainer">
                <p>Welcome to Little Lemon, where culinary excellence meets unforgettable dining experiences. Our chef-curated menu features a symphony of flavors, blending the finest ingredients to create delectable dishes that tantalize the taste buds. </p>
            </div>
            <div className="HistoryImageContainerA">
                <img src={RestaurantImage1} alt="Historya"/>
            </div>
            <div className="HistoryImageContainerB">
                <img src={RestaurantImage2} alt="Historyb"/>
            </div>
        </section>
    )
}