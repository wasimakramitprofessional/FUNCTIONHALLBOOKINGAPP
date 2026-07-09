import React from "react";
import Sidebar from "../../components/Customer/Sidebar";


function CustomerDashboard(){
    return (
        <div className="customer-dashboard">
            <Sidebar items={["My Bookings", "Saved Halls", "Payments & Invoices", "Profile", "Support"]} active = "My Bookings" />
            <div className="bookings-table">
                <table>
                    <thead>
                        <tr><th>Hall</th><th>Date</th><th>Status</th><th>Amount Paid</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Grand Orchids</td><td>12 Aug 2026</td><td>Confirmed</td><td>Rs 9,000 / Rs45,000</td><td>View / Pay balance</td></tr>
                        <tr><td>Royal Palms</td><td>02 Sep 2026</td><td>Pending Owner Confirmation</td><td>Rs 6,000 / Rs45,000</td><td>View / Cancel</td></tr>
                        <tr><td>Sunshine Gardens</td><td>15 Mar 2026</td><td>Completed</td><td>Rs 60,000</td><td>Leave a review</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CustomerDashboard