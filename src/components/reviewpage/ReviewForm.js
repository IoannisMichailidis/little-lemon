import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useFormik } from "formik";
import * as Yup from "yup";

// Custom Hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAddReview } from '../../hooks/useAddReview';

// Styles
import '../../styles/global.css';
import './ReviewForm.css';

export const ReviewForm = () => {
    const { user } = useAuthContext(); 
    const { addReview, reviewError, reviewIsPending} = useAddReview();
    const [ratingKey, setRatingKey] = useState(0);

    const formik = useFormik({
        initialValues: {
          foodRating: 0,
          serviceRating: 0, 
          atmosphereRating: 0,
          reviewText: "",
        },
        onSubmit: async (values) => {
            // Calculate the average rating
            const average = (values.foodRating + values.serviceRating + values.atmosphereRating) / 3;
            const rating = Math.round(average);
            const userName = user.displayName;
            const doc = { ...values, rating, userName };
            try{
                // Create a new review document in the DB
                await addReview(doc);
            } catch (err) {
                console.log('Registering new reivew failed',err);
                formik.resetForm();
                // Makes sure that the star rating visual takes it's inital form
                setRatingKey(prevKey => prevKey + 1); 

            }

        },
        validationSchema: Yup.object({
          foodRating: Yup.number().min(1, "Must be at least 1 star").required("Rating is required"),
          serviceRating: Yup.number().min(1, "Must be at least 1 star").required("Rating is required"),
          atmosphereRating: Yup.number().min(1, "Must be at least 1 star").required("Rating is required"),
          reviewText: Yup.string(),
        }),
      });

    const handleRatingChange = (rate, name) => {
        formik.setFieldValue(name, rate);
    };

    return (
        <div className="ReviewContainer">
            <div className='ReviewForm'>
                <div className='ReviewFormTitle'>
                    <h2>Give us a review</h2>
                </div>
                <div className='ReviewFormInputes'>
                    <form onSubmit={formik.handleSubmit} noValidate>
                            {/* Food Rating */}
                            <div className='ReviewDivs'>
                                <label htmlFor="food-rating">Food Rating:</label>
                                <Rating
                                    key={`foodRating-${ratingKey}`}
                                    onClick={(rate) => handleRatingChange(rate, 'foodRating')}
                                    ratingValue={formik.values.foodRating}
                                />
                            {formik.touched.foodRating && formik.errors.foodRating ? (
                                <p className='ErrorDiv'>{formik.errors.foodRating}</p>
                            ) : null}
                            </div>
                            {/* Service Rating */}
                            <div className='ReviewDivs' >
                                    <label htmlFor="service-rating">Service Rating:</label>
                                        <Rating
                                            key={`serviceRating-${ratingKey}`}
                                            onClick={(rate) => handleRatingChange(rate, 'serviceRating')}
                                            ratingValue={formik.values.serviceRating}
                                        />
                                    {formik.touched.serviceRating && formik.errors.serviceRating ? (
                                        <p className='ErrorDiv'>{formik.errors.serviceRating}</p>
                                    ) : null}
                            </div>
                            {/* Atmosphere Rating */}
                            <div className='ReviewDivs'>
                                <label htmlFor="atmosphere-rating">Atmosphere Rating:</label>
                                <Rating
                                    key={`atmosphereRating-${ratingKey}`}
                                    onClick={(rate) => handleRatingChange(rate, 'atmosphereRating')}
                                    ratingValue={formik.values.atmosphereRating}
                                />
                                {formik.touched.atmosphereRating && formik.errors.atmosphereRating ? (
                                    <p className='ErrorDiv'>{formik.errors.atmosphereRating}</p>
                                ) : null}
                            </div>
                            {/* Text Review */}
                            <div className='ReviewDivs'>
                                <label htmlFor="review-text">Review:</label>
                                <textarea
                                    data-testid="text-review"
                                    onChange={formik.handleChange}
                                    value={formik.values.reviewText}
                                    name="reviewText"
                                />
                                {formik.touched.reviewText && formik.errors.reviewText ? (
                                    <p className='ErrorDiv'>{formik.errors.reviewText}</p>
                                ) : null}
                            </div>
                            {/* Submit Button */}
                            {reviewIsPending ?
                                <input aria-label="On Click" disabled className='CustomButton' type="submit" value="loading"/>
                                :
                                <input aria-label="On Click" className='CustomButton' type="submit" value="Submit your review"/>
                            }
                            { reviewError && <p className="ErrorDiv">Something went wrong. Review is not submitted.</p>}
                        </form>
                </div>
            </div>
        </div>
    );
};
