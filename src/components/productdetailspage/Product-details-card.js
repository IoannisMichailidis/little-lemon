import React from "react";

// Styles
import './Product-details-card.css';


export const ProductCardDetails = ({name,price,description,image,ingredients}) => {
    return (
        <article className="productDetails">
            <div className="productDetailsImageContainer">   
                <img src={image} alt={name}/>
            </div>
            <div className="productDetailsContentContainer">
                <div className="TitlePriceContainer">
                    <h3 className="card-title">{name}</h3>
                    <p className="Price highlight-text">${price}</p>
                </div>
                <p>Description:</p>
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