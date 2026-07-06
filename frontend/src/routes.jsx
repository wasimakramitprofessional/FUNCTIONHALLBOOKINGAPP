import React from "react";
import {Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";
import HallDetail from "./pages/HallDetail";
import BookingCheckout from "./pages/BookingCheckout";
import CustomerDashboard from "./pages/CustomerDashboard";
import BookingForm from "./pages/BookingForm";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HallOwnerPage from "./pages/HallOwnerPage";
import OwnerCalendar from "./components/OwnerCalendar";
import OwnerDashboard from "./components/OwnerDashboard";
import OwnerEarnings from "./components/OwnerEarnings";
import OwnerListings from "./components/OwnerListings";
import OwnerOnboarding from "./components/OwnerOnboarding";



function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/hall/:id" element={<HallDetail />} />
            <Route path="/booking/:id" element={<BookingCheckout />} />
            <Route path="/dashboard" element={<CustomerDashboard />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            
            <Route path="/hall-owner" element={<HallOwnerPage />} />
            <Route path="/OwnerCalendar" element={<OwnerCalendar />} />
            <Route path="/OwnerDashboard" element={<OwnerDashboard />} />
            <Route path="/OwnerEarnings" element={<OwnerEarnings />} />
            <Route path="/OwnerListings" element={<OwnerListings />} />
            <Route path="/owner-onboarding" element={<OwnerOnboarding />} />

            
        </Routes>
    );
}

export default AppRoutes;