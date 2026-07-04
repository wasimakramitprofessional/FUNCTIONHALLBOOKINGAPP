import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Customer registered successfully!");
    // TODO: send to backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">Customer Sign Up</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name}
            onChange={handleChange} required className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500"/>
          <input type="email" name="email" placeholder="Email" value={formData.email}
            onChange={handleChange} required className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500"/>
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
            onChange={handleChange} required className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500"/>
          <input type="password" name="password" placeholder="Password" value={formData.password}
            onChange={handleChange} required className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500"/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword}
            onChange={handleChange} required className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500"/>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
