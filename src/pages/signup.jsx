import React from 'react';
import img from '../assets/sign.png'; 

function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      </div>

      {/* Right side  */}
      <div className="w-1/2 flex flex-col justify-between bg-gradient-to-r from-blue-900 to-blue-600 text-white p-12">
        <div></div>

        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-4xl font-extrabold mb-10 text-gray-100">Admin Panel Login</h2>
          <form className="w-full max-w-sm space-y-6">
            <div className="relative">
              <input
                type="text"
                id="username"
                className="w-full p-4 rounded bg-gray-200 text-gray-800 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your username"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full p-4 rounded bg-gray-200 text-gray-800 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-blue-300 hover:text-blue-400 text-sm underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="border-t border-gray-300 mt-8">
          <p className="text-center text-gray-300 text-xs pt-6">Developed by Arimax Solutions</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
