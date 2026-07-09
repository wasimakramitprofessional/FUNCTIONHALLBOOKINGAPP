import React from "react";
import {Routes, Route} from "react-router-dom";
import Landing from "./pages/Customer/Landing";
import SearchResults from "./pages/Customer/SearchResults";
import HallDetail from "./pages/Customer/HallDetail";
import BookingCheckout from "./pages/Customer/BookingCheckout";
import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import BookingForm from "./pages/Customer/BookingForm";
import Register from "./pages/Customer/Register";
import Login from "./pages/Customer/Login";
import HallOwnerPage from "./pages/HallOwner/HallOwnerPage";
import OwnerCalendar from "./components/HallOwner/OwnerCalendar";
import OwnerDashboard from "./components/HallOwner/OwnerDashboard";
import OwnerEarnings from "./components/HallOwner/OwnerEarnings";
import OwnerListings from "./components/HallOwner/OwnerListings";
import OwnerOnboarding from "./components/HallOwner/OwnerOnboarding";



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