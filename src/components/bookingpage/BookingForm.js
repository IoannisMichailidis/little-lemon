import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Custom Hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAddBooking } from "../../hooks/useAddBooking";
import { useCollection } from "../../hooks/useCollection";

// Styles
import '../../styles/global.css';
import './BookingForm.css';

export const BookingForm = () => {
  const { user } = useAuthContext();
  const {addBooking, removeTimeslot, bookingError, bookingIsPending} = useAddBooking();
  // Fetch dates and timeslots from Firestore
  const {data} = useCollection('dates');
  const [availableTimeslots, setAvailableTimeslots] = useState([]);

  // Used for the Client-side validation
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const formik = useFormik({
    initialValues: {
      date: (new Date()).toLocaleDateString("en-CA"),
      time: '',
      guests: 1,
      occasion: "",
    },
    onSubmit: async (values) => {
      const uid = user.uid;  // Add the uid also to the doc to provide bookings info to a specific user
      const doc = { ...values, uid };
      try{
        // Create a new booking document in the DB
        await addBooking(doc);
        // Remove a timeslot from the dates collection
        await removeTimeslot(doc);
      } catch (err) {
        console.log('Registering new booking failed',err);
        formik.resetForm();
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().min(yesterday, "Date can't be in the past").required("Date is required"),
      time: Yup.string().oneOf(availableTimeslots).required("Select one of the available time slots"),
      guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Guest selection is required"),
      occasion: Yup.string().oneOf(["birthday", "anniversary"]).required("Occasion is required"),
    }),
  });

    // Update available timeslots when date changes
    useEffect(() => {
      if (data) {
          const selectedDate = formik.values.date;
          const dateData = data.find(d => d.id === selectedDate);
          if (dateData && dateData.timeslots) {
              setAvailableTimeslots(dateData.timeslots);
          } else {
              setAvailableTimeslots([]);
          }
      }
  }, [formik.values.date, data]);

  return (
    <div className="BookingContainer">
        <div className='BookingForm'>
            <div className='BookingFormTitle'>
                <h2>Book Now</h2>
            </div>
            <div className='BookingFormInputs'>
              <form onSubmit={formik.handleSubmit} noValidate>
                {/* Date */}
                <div className='BookingDivs' >
                    <label htmlFor="res-date">Choose date</label>
                    <input
                      data-testid="res-date"
                      className={( formik.errors.date) ? "ErrorBookingInput" : "BookingInput" }
                      type="date"
                      id="res-date"
                      {...formik.getFieldProps("date")}
                    />
                    {formik.errors.date && <p className="ErrorDiv">{formik.errors.date}</p>}
                </div>
                {/* Time */}
                <div className='BookingDivs'>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                      data-testid="res-time"
                      className={(formik.touched.time && formik.errors.time) ? "ErrorBookingInput" : "BookingInput" }
                      id="res-time"
                      {...formik.getFieldProps("time")}
                    >
                    {!formik.values.time && <option value="" disabled hidden></option>}
                    {availableTimeslots.length > 0 ? (
                    availableTimeslots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))
                    ) : (
                        <option value="" disabled>No available timeslots</option>
                    )}
                    </select>
                    {formik.touched.time && formik.errors.time && <p className="ErrorDiv">{formik.errors.time}</p>}
                </div>
                {/* Guests */}
                <div className='BookingDivs'>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                      data-testid="guests"
                      className={(formik.touched.guests && formik.errors.guests) ? "ErrorBookingInput" : "BookingInput" } 
                      type="number"
                      placeholder="1"
                      min="1"
                      max="10"
                      id="guests"
                      {...formik.getFieldProps("guests")} />
                    {formik.touched.guests && formik.errors.guests && <p className="ErrorDiv">{formik.errors.guests}</p>}
                </div>
                {/* Occasion */}
                <div  className='BookingDivs'>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                      data-testid="occasion"
                      className={(formik.touched.occasion && formik.errors.occasion) ? "ErrorBookingInput" : "BookingInput" }
                      id="occasion"
                      {...formik.getFieldProps("occasion")}
                    >
                    {!formik.values.occasion && <option value="" disabled hidden></option>}
                      <option value="birthday" className="opt">Birthday</option>
                      <option value="anniversary" className="opt">Anniversary</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion && <p className="ErrorDiv">{formik.errors.occasion}</p>}
                </div>
                {/* Submit Button */}
                {bookingIsPending ?
                  <input aria-label="On Click" disabled className='CustomButton' type="submit" value="loading"/>
                  :
                  <input aria-label="On Click" disabled={formik.errors.date || formik.errors.time || formik.errors.guests || formik.errors.occasion} className='CustomButton' type="submit" value="Make Your reservation"/>
                }
                { bookingError && <p className="ErrorDiv">Something went wrong! Booking is not submitted.</p>}
              </form>
            </div>
          </div>
      </div>
  );
};
