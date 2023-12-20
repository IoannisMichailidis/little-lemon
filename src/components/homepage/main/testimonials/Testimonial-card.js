
import React from "react";
import { Rating } from 'react-simple-star-rating'


// Styles
import './Testimonial-card.css';


export const TestimonialCard = ({userName, reviewText, image, rating}) => {

    return (

        <article >
                <Rating initialValue={rating} readonly={true} />
                <div className="TestimonialsImageName">
                    <div className="TestimonialsImage">
                        <img src={image} alt="testimonial"/>
                    </div>
                    <div className="TestimonialsName">
                        <p>{userName}</p>
                    </div>
                </div>
                <p>{reviewText}</p>
        </article>
    )
}