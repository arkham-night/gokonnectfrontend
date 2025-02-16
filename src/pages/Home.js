import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Welcome to GoKonnect</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Seamless, Secure, and Reliable Driver Booking</p>
      <div className="flex space-x-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Book a Driver</button>
        <button className="bg-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-400">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
