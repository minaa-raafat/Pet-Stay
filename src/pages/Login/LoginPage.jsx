import {Navbar,collaps,typogrphy,IconButton,}
from "@material-tailwind/react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage(){
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const [viewMode, setViewMode] = useState(
    localStorage.getItem("viewMode") || "desktop"
  );
  const [showSelector, setShowSelector] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {
      email: "",
      password: ""
    };
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    if (newErrors.email || newErrors.password) return;
    navigate("/");
  };
  const layoutClass =
    viewMode === "mobile"
      ? "max-w-sm mx-auto"
      : viewMode === "tablet"
      ? "max-w-4xl mx-auto"
      : "w-full";
  return (
    <div className={`flex flex-col min-h-screen bg-gray-100 ${layoutClass}`}>
      <button
        onClick={() => setShowSelector(true)}
        className="fixed bottom-6 right-6 bg-teal-500 text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        View Website
      </button>
      {showSelector && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-80 text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Choose Device View
            </h2>
            <button
              onClick={() => {
                setViewMode("mobile");
                localStorage.setItem("viewMode", "mobile");
                setShowSelector(false);
              }}
              className="w-full bg-gray-100 py-2 rounded-xl mb-2"
            >
              <div className="flex justify-center items-center">
                <FaMobileScreenButton /> mobile view
              </div>
            </button>
            <button
              onClick={() => {
                setViewMode("tablet");
                localStorage.setItem("viewMode", "tablet");
                setShowSelector(false);
              }}
              className="w-full bg-gray-200 py-2 rounded-xl mb-2"
            >
              📟 Tablet View
            </button>
            <button
              onClick={() => {
                setViewMode("desktop");
                localStorage.setItem("viewMode", "desktop");
                setShowSelector(false);
              }}
              className="w-full bg-teal-500 text-white py-2 rounded-xl"
            >
              🖥️ Desktop View
            </button>
            <button
              onClick={() => setShowSelector(false)}
              className="mt-3 text-sm text-gray-500"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
      <header className="bg-white shadow-sm px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-teal-600">
          WhereMy Home
        </h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">

          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-teal-600" : "text-gray-600"}>
            Home
          </NavLink>

          <NavLink to="/cats" className={({ isActive }) =>
            isActive ? "text-teal-600" : "text-gray-600"}>
            Cats
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-teal-600" : "text-gray-600"}>
            Contact
          </NavLink>

          <NavLink to="/login" className={({ isActive }) =>
            isActive ? "text-teal-600 font-bold" : ""}>
            Login
          </NavLink>

          <NavLink to="/register" className={({ isActive }) =>
            isActive ? "text-teal-600 font-bold" : ""}>
            Register
          </NavLink>

        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="w-64 bg-white h-full p-6">

            <button
              className="text-2xl mb-6"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <div className="flex flex-col gap-5 text-lg font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <a href="#" onClick={() => setMenuOpen(false)}>Cats</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Pets</a>

              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>

              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </div>

          </div>
        </div>
      )}

      <div className="flex-grow flex items-center justify-center px-4">

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">
                I am a Frinedly Cat
              </h2>
              <p className="text-sm text-gray-200">
                Join our community of cat lovers and discover your perfect guide.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>

            <form onSubmit={handleLogin} className="space-y-4">

              <div>
                <input
                  type="email"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 pr-12"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <button className="w-full bg-teal-600 text-white py-3 rounded-xl">
                Login
              </button>

              <div className="text-center text-sm">
                <Link to="/register" className="text-teal-600">
                  Create account
                </Link>
              </div>

            </form>

          </div>

        </div>

      </div>

      <footer className="bg-white mt-16 px-4 sm:px-8 md:px-16 py-8 border-t">

        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div>
            <h2 className="text-xl font-bold text-teal-600">WhereMy Home</h2>
            <p className="text-gray-500 text-sm mt-2">
              Helping pets find homes.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>

        </div>

      </footer>

    </div>
  );
}