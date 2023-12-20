import React from "react";

// Styles
import './Special-card.css';


export const SpecialCardDetails = ({name,price,description,image,ingredients}) => {
    return (
        <article>
            <div className="articleImgContainer">
                <img src={image} alt={name}/>
            </div>
            <div className="articleContentContainer">
                <div className="TitlePriceContainer">
                    <h3 className="card-title">{name}</h3>
                    <p className="Price highlight-text">${price}</p>
                </div>
                <p>{description}</p>
                <div className="IngredientsContainer">
                        <p>Ingredients:</p>
                        <ul>
                            {ingredients.map((ingredient, index) => {
                                return (<li key={index}>{ingredient}</li>)
                            })}
                        </ul>
                </div>
            </div>
        </article>
    )
}