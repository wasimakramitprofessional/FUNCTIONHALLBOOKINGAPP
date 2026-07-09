import React from "react";
import Stepper from "../../components/Customer/Stepper";

function BookingCheckout(){
    return(
        <div className="booking-checkout">
            <Stepper steps={["Details", "Payment", "Confirmation"]} current={1} />
            <div className="checkout-layout">
                <div className="event-details">
                    <h3>Event Details</h3>
                    <input type="Name" />
                    <input type="Phone" />
                    <select><option>Wedding</option><option>Corporate</option></select>
                    <input type="date" />
                    <input type="number" placeholder="Guest Count" />

                </div>
                <div className="payment">
                    <h3>Payment</h3>
                    <p>Order Summary: Hall rent + add-ons + tax</p>
                    <select><option>UPI</option><option>Card</option><option>Netbanking</option></select>
                    <button>Pay advance & confirm bookings</button>
                </div>
            </div>
        </div>
    );
}

export default BookingCheckout;