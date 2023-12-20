import React from "react";
import { useNavigate } from 'react-router-dom';

// Styles
import './Special-card.css';

export const Card = ({name,price,description,image,id}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${id}`);
    };

    return (
        <article onClick={handleClick}>
            <div className="articleImgContainer">
                <img src={image} alt={name}/>
            </div>
            <div className="articleContentContainer">
                <div className="TitlePriceContainer">
                    <h3 className="card-title">{name}</h3>
                    <p className="Price highlight-text">${price}</p>
                </div>
                <p>{description}</p>
            </div>
        </article>
    )
}