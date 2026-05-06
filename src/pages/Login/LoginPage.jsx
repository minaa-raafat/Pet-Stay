import {Navbar,collaps,typogrphy,IconButton,}
from "@material-tailwind/react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const [viewMode, setViewMode] = useState(
    localStorage.getItem("viewMode") || "desktop"
  );
  const [showSelector, setShowSelector] = useState(false);
//dah mogrd event kan momken ast5dm library bs el ghaz msh mst7ml
  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = { email: "", password: "" };

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
//deh mkan el if condition 
  const layoutClass =
    viewMode === "mobile"
      ? "max-w-sm mx-auto"
      : viewMode === "tablet"
      ? "max-w-3xl mx-auto"
      : "w-full";

  return (
    <div className={`flex flex-col min-h-screen bg-gray-100 ${layoutClass}`}>

      <button
        onClick={() => setShowSelector(true)}
        className="fixed bottom-6 right-6 bg-teal-500 text-white px-4 py-3 rounded-full shadow-lg z-50 text-sm font-medium"
      >
        View Website
      </button>

      {showSelector && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-xs text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Choose Device View</h2>

            <button
              onClick={() => { setViewMode("mobile"); localStorage.setItem("viewMode", "mobile"); setShowSelector(false); }}
              className="w-full bg-gray-100 py-2 rounded-xl mb-2 flex justify-center items-center gap-2"
            >
              <FaMobileScreenButton /> Mobile View
            </button>

            <button
              onClick={() => { setViewMode("tablet"); localStorage.setItem("viewMode", "tablet"); setShowSelector(false); }}
              className="w-full bg-gray-200 py-2 rounded-xl mb-2"
            >
              📟 Tablet View
            </button>

            <button
              onClick={() => { setViewMode("desktop"); localStorage.setItem("viewMode", "desktop"); setShowSelector(false); }}
              className="w-full bg-teal-500 text-white py-2 rounded-xl"
            >
              🖥️ Desktop View
            </button>

            <button onClick={() => setShowSelector(false)} className="mt-3 text-sm text-gray-500">
              Cancel
            </button>
          </div>
        </div>
      )}

      <header className="bg-white shadow-sm px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between sticky top-0 z-40">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600">
          WhereMy Home
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-600 font-semibold" : "text-gray-600 hover:text-teal-500 transition-colors"}>
            Home
          </NavLink>
          <NavLink to="/cats" className={({ isActive }) => isActive ? "text-teal-600 font-semibold" : "text-gray-600 hover:text-teal-500 transition-colors"}>
            Cats
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-teal-600 font-semibold" : "text-gray-600 hover:text-teal-500 transition-colors"}>
            Contact
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-500 transition-colors"}>
            Login
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-500 transition-colors"}>
            Register
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          
          <div className="relative"> {/* Profile Icon elly fe el nav bar */}
            <FaUserCircle
              className="text-2xl cursor-pointer text-gray-500 hover:text-teal-600 transition-colors"
              onClick={() => setProfileOpen(!profileOpen)}
            />
            {profileOpen && (
              <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-2xl p-3 flex flex-col gap-2 text-sm z-50 w-36 border border-gray-100">
                <Link to="/profile" className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors" onClick={() => setProfileOpen(false)}>
                   Profile
                </Link>
                <Link to="/login" className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors" onClick={() => setProfileOpen(false)}>
                   Login
                </Link>
                <button className="text-left px-3 py-2 rounded-xl hover:bg-red-50 text-red-500 transition-colors">
                   Logout
                </button>
              </div>
            )}
          </div>

          <button
            className="md:hidden text-2xl text-gray-600"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
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

      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
              className="h-full w-full object-cover"
              alt="Friendly cat"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">I'm a Friendly Cat</h2>
              <p className="text-sm text-gray-200">
                Join our community of cat lovers and discover your perfect companion.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h1>
          {/*3arf enna m5dnash handle login bs hya library yo3tbr koisa*/}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-teal-600 font-medium"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="text-teal-600 font-medium hover:underline">
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