import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
    // TODO: send to backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
          <input type="email" name="email" placeholder="Email" value={formData.email}
            onChange={handleChange} required className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500"/>
          <input type="password" name="password" placeholder="Password" value={formData.password}
            onChange={handleChange} required className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-500"/>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
