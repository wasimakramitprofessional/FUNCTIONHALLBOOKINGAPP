import React from "react";
import {Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";
import HallDetail from "./pages/HallDetail";
import BookingCheckout from "./pages/BookingCheckout";
import CustomerDashboard from "./pages/CustomerDashboard";
import BookingForm from "./pages/BookingForm";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/hall/:id" element={<HallDetail />} />
            <Route path="/booking/:id" element={<BookingCheckout />} />
            <Route path="/dashboard" element={<CustomerDashboard />} />
            <Route path="/booking" element={<BookingForm />} />
        </Routes>
    );
}

export default AppRoutes;