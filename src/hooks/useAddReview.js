import { projectFirestore, timestamp} from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const useAddReview = () => {
    const [reviewError, setReviewError] = useState(null);
    const [reviewIsPending, setReviewIsPending] = useState(false);
    const navigate = useNavigate();

    const addReview = async (doc) => {

        return new Promise(async (resolve, reject) => {
            setReviewError(null);
            setReviewIsPending(true);
            try{
                // Refer to a collection in the firestore
                const refDoc = projectFirestore.collection('testimonials');
                // Create a timestamp in case there is a need for shorting/ordering the documents
                const createAt = timestamp.fromDate(new Date());
                await refDoc.add({...doc, createAt}); // add both the doc and createAt (timestamp)
                console.log(`Review added successfully`);
                setReviewIsPending(false);
                setReviewError(null);
                // Navigate the user to home page
                navigate("/");
                resolve();
            } catch (err) {
                console.log(err);
                setReviewError(err.message);
                setReviewIsPending(false);
                reject(err);
            }
        });
    }

    return {addReview, reviewError, reviewIsPending}

}
