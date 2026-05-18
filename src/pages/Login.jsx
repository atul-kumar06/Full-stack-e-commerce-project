import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginImage } from "../assets";

const Login = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", { email, password });
  };

  return (
    <div className="flex">
      {/* Form Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 bg-white">
        <form
          className="w-full max-w-md animate-fade-in-up"
          style={{ animation: "fadeInUp 0.5s ease both" }}
          onSubmit={handleSubmit}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <span
              className="text-2xl font-black tracking-tight"
              style={{
                animation: "fadeInUp 0.4s ease both",
                animationDelay: "0.05s",
              }}
            >
              Rabbit
            </span>
          </div>

          {/* Heading */}
          <div
            style={{
              animation: "fadeInUp 0.4s ease both",
              animationDelay: "0.1s",
            }}
          >
            <h2 className="text-3xl font-bold text-center mb-2">
              Hey There! 👋
            </h2>
            <p className="text-center text-gray-400 text-sm mb-8">
              Enter your email and password to login
            </p>
          </div>

          {/* Email */}
          <div
            className="mb-4"
            style={{
              animation: "fadeInUp 0.4s ease both",
              animationDelay: "0.15s",
            }}
          >
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1 uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder:text-gray-300"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div
            className="mb-6"
            style={{
              animation: "fadeInUp 0.4s ease both",
              animationDelay: "0.2s",
            }}
          >
            <div className="flex justify-between items-center mb-1.5 ml-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-black transition-colors duration-150"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder:text-gray-300"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <div
            style={{
              animation: "fadeInUp 0.4s ease both",
              animationDelay: "0.25s",
            }}
          >
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-200"
            >
              Login
            </button>
          </div>

          {/* Register Link */}
          <p
            className="text-center mt-6 text-sm text-gray-400"
            style={{
              animation: "fadeInUp 0.4s ease both",
              animationDelay: "0.3s",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-black font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Image Side */}
      <div
        className="hidden md:block w-1/2 h-140 overflow-hidden"
        style={{ animation: "fadeIn 0.6s ease both", animationDelay: "0.1s" }}
      >
        <img
          src={LoginImage}
          alt="Login"
          className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Login;
