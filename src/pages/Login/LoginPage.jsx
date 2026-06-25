import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate, Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

      <header className="bg-white dark:bg-gray-800 shadow-sm px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between sticky top-0 z-40 transition-colors duration-300">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400">
          WhereMy Home
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-600 dark:text-teal-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"}>
            Home
          </NavLink>
          <NavLink to="/cats" className={({ isActive }) => isActive ? "text-teal-600 dark:text-teal-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"}>
            Cats
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-teal-600 dark:text-teal-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"}>
            Contact
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-teal-600 dark:text-teal-400 font-bold" : "text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"}>
            Login
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? "text-teal-600 dark:text-teal-400 font-bold" : "text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"}>
            Register
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-500 dark:text-yellow-300 hover:text-teal-600 dark:hover:text-yellow-200 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer text-gray-500 dark:text-gray-300 hover:text-teal-600 transition-colors"
              onClick={() => setProfileOpen(!profileOpen)}
            />
            {profileOpen && (
              <div className="absolute right-0 mt-3 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-3 flex flex-col gap-2 text-sm z-50 w-36 border border-gray-100 dark:border-gray-700">
                <Link to="/profile" className="px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors" onClick={() => setProfileOpen(false)}>
                   Profile
                </Link>
                <Link to="/login" className="px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors" onClick={() => setProfileOpen(false)}>
                   Login
                </Link>
                <button className="text-left px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/30 text-red-500 transition-colors">
                   Logout
                </button>
              </div>
            )}
          </div>

          <button
            className="md:hidden text-2xl text-gray-600 dark:text-gray-200"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMenuOpen(false)}>
          <div
            className="w-64 bg-white dark:bg-gray-800 h-full p-6 shadow-xl transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="text-2xl mb-6 text-gray-600 dark:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <div className="flex flex-col gap-5 text-lg font-medium text-gray-700 dark:text-gray-200">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/cats" onClick={() => setMenuOpen(false)}>Cats</Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </div>

          </div>
        </div>
      )}

      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-colors duration-300">

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
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Welcome Back</h1>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
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
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-teal-600 dark:text-teal-400 font-medium"
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

              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link to="/register" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>


      <footer className="bg-white dark:bg-gray-800 mt-16 px-4 sm:px-8 md:px-16 py-8 border-t dark:border-gray-700 transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400">WhereMy Home</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Helping pets find homes.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
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