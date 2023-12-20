
import React from "react";

// Custom Hooks
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

// Styles
import './MyBookings.css';

// Components
import { Booking } from './Booking-card';

export const MyBookings = () => {
    const {user} = useAuthContext();
    const {data, error,isPending} = useCollection (
        'bookings', // First argument
        ["uid","==",user.uid], // Second argument. This will be used in the where method of the custom hook to filter the collection by uid.
        ["createAt", "desc"] // Third argument. This will be used in the orderBy clause of the custom hook to order the fetched data in ascending or descending order. I will use the createAt property(timestamp)
    );

    const hasBookings = Array.isArray(data) && data.length > 0;
    return (
        <main className="Bookings">
            <section className="BookingsHeaderContainer">
                <h2 className="title">My Bookings</h2>
            </section>
            <section className="BookingsContentContainer">
                <div className="BookingsContentArticleContainer">
                    {error && <p >{error}</p>}
                    {isPending && <p>Loading...</p>}
                    {!isPending && hasBookings ? data.map((booking) => (
                        <Booking
                            key={booking.id}
                            date={booking.date}
                            time={booking.time}
                            guests={booking.guests}
                            occasion={booking.occasion}
                        />
                    ))
                    : <p>No Bookings found.</p>
                }

                </div>
            </section>
        </main>
    )
}