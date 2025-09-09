// src/pages/homePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Train, ArrowRight, MapPin, Calendar, Clock } from "lucide-react";
import Navbar from "../components/navbar";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar isLoggedIn={isLoggedIn} />
      
      {isLoggedIn ? (
        <main className="py-16">
          <h1 className="text-4xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-xl text-gray-600 mt-4">You are now logged in.</p>
        </main>
      ) : (
        <main className="py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8">
              <Train className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">Rail Connect</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 px-4 sm:px-6 lg:px-8">
              Your one-stop solution for booking train tickets. Search, compare, and book 
              train journeys across the country with ease and convenience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/account/signup" // Use 'to' instead of 'href'
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-medium text-lg transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/account/signin" // Use 'to' instead of 'href'
                className="inline-flex items-center border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 font-medium text-lg transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Location Search
              </h3>
              <p className="text-gray-600">
                Simply enter your departure and destination cities to find available trains
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Flexible Date Selection
              </h3>
              <p className="text-gray-600">
                Choose your travel date and find trains that match your schedule
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-time Information
              </h3>
              <p className="text-gray-600">
                Get up-to-date train schedules, prices, and availability information
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of travelers who trust Rail Connect for their train bookings
            </p>
            <Link
              to="/account/signup" // Use 'to' instead of 'href'
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-medium text-lg transition-colors"
            >
              Create Your Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center">
            <Train className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-gray-600">© 2025 Rail Connect. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;