import { projectFirestore, timestamp, arrayRemove } from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const useAddBooking = () => {
    const navigate = useNavigate();
    const [bookingError, setBookingError] = useState(null);
    const [bookingIsPending, setBookingIsPending] = useState(false);

    const addBooking = async (doc) => {
        return new Promise(async (resolve, reject) => {
            setBookingError(null);
            setBookingIsPending(true);
            try{
                // Refer to a collection in the firestore
                const refDoc = projectFirestore.collection('bookings');
                // Create a timestamp in case there is a need for shorting/ordering the documents
                const createAt = timestamp.fromDate(new Date());
                await refDoc.add({...doc, createAt}); // add both the doc and createAt (timestamp)
                console.log(`Booking added successfully`);
                setBookingIsPending(false);
                setBookingError(null);
                resolve();
            } catch (err) {
                console.log(err);
                setBookingError(err.message);
                setBookingIsPending(false);
                reject(err);
            }
        });
    }

    const removeTimeslot = async (doc) => {
        return new Promise(async (resolve, reject) => {
            setBookingError(null);
            setBookingIsPending(true);
            try{
                // Remove a timeslot from the dates collection
                const docRef = projectFirestore.collection('dates').doc(doc.date);
                await docRef.update({
                    timeslots: arrayRemove(doc.time)
                });
                setBookingIsPending(false);
                setBookingError(null);
                console.log(`Timeslot removed successfully`);
                navigate("/confirmation", { state: { bookingData: doc } });
                resolve();
            } catch (err) {
                console.log(err);
                setBookingError(err.message);
                setBookingIsPending(false);
                reject(err);
            }
        });
    }

    return {addBooking, removeTimeslot, bookingError, bookingIsPending}

}
