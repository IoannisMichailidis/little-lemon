
import React from "react";
import Slider from 'react-slick';

// Images
import avatar_user from '../../../../images/user.png';

// Components
import { TestimonialCard } from "./Testimonial-card";

// Custom Hooks
import { useCollection } from "../../../../hooks/useCollection";

// Styles
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const Testimonials = () => {
    const {data,isPending,error} = useCollection('testimonials');
        console.log('testimonials', data)
        // Slider settings
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

    return (
        <>
            <section className="TestimonialsHeaderContainer">
                <h2 className="title">Testimonials</h2>
            </section>
            <section className="TestimonialsContentContainer">
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                <Slider {...settings}>
                    {data && data.map((testimonial) => (
                            <div key={testimonial.id}>
                                <TestimonialCard
                                    key={testimonial.id}
                                    userName={testimonial.userName}
                                    reviewText={testimonial.reviewText}
                                    image={avatar_user}
                                    rating={testimonial.rating}
                                />
                            </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}