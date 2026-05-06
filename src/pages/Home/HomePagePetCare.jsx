import {Navbar,collaps,typogrphy,IconButton,} 
from "@material-tailwind/react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function HomePagePetCare() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState(
    localStorage.getItem("viewMode") || "desktop"
  );
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("theme") === "dark"
  );
  const [showSelector, setShowSelector] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [petType, setPetType] = React.useState("Cat");
  const [error, setError] = React.useState("");
  const [profileOpen, setProfileOpen] = React.useState(false);

  const pets = [
    { id: 1, name: "bsbosa", type: "Friendly Cat", age: "3 Monthes",
      image:"https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80"},
    { id: 2, name: "biso", type: "Cute Cat", age: "8 Months",
      image:"https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80"},
    { id: 3, name: "mshmsha", type: "Helpful Cat", age: "1 Year",
      image:"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&q=80"}
  ];

  const handleSearch = () => {
    if (location.trim() === "") {
      setError("Location is required");
      return;
    }
    setError("");
    console.log("Search:", location, petType);
  };
//mkan el if condition 
  const layoutClass =
    viewMode === "mobile"//kda true
      ? "max-w-sm mx-auto"
      : viewMode === "tablet"
      ? "max-w-3xl mx-auto"
      : "w-full";

  return (
    <div className={`min-h-screen bg-[#f7f7f7] text-gray-800 ${layoutClass}`}>
     
      <button // hna na 3amel button ll responsive
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
              onClick={() => {
                setViewMode("mobile");
                localStorage.setItem("viewMode", "mobile");
                setShowSelector(false);
              }}
              className="w-full bg-gray-100 py-2 rounded-xl mb-2 flex justify-center items-center gap-2"
            >
              <FaMobileScreenButton /> Mobile View
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

          <div className="relative">
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
        <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMenuOpen(false)}>
          <div
            className="w-64 bg-white h-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="text-2xl mb-6 text-gray-600" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
            <div className="flex flex-col gap-4 text-base font-medium">
              <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
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

      <section className="px-4 sm:px-8 md:px-16 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Find a <span className="text-teal-500 italic">loving</span>
            <br />
            home for every cat
          </h2>

          <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-md">
            Connecting caring people with pets who need homes.
          </p>

          <div className="bg-white shadow-md rounded-2xl p-4 mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Location"
              value={location}
              //dah mogrd event kan momken ast5dm library bs el ghaz msh mst7ml
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-2.5 w-full sm:flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <select
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-2.5 w-full sm:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <option>Cat</option>
              <option>Friendly Cat</option>
              <option>Big Cat</option>
              <option>Small Cat</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="bg-white rounded-3xl p-3 shadow-lg w-fit mx-auto">
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=800&q=80"
            className="w-[160px] sm:w-[220px] md:w-[280px] object-contain rounded-2xl"
            alt="Cute cat"
          />
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-16 py-12">
        <h3 className="text-2xl font-bold text-center mb-10">How it works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Find Cats", desc: "Search cats easily by location and type." },
            { title: "Meet with Cats", desc: "Schedule a meet before adoption." },
            { title: "Adopt Cat", desc: "Take your new friend home." },
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-lg">
                {i + 1}
              </div>
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-16 py-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Featured Cats</h3>
          <Link to="/all" className="text-teal-600 text-sm hover:underline">
            View all Cats →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={pet.image} className="w-full h-56 sm:h-64 object-cover" alt={pet.name} />
              <div className="p-5 sm:p-6">
                <h4 className="text-xl font-bold capitalize">{pet.name}</h4>
                <p className="text-gray-500 mt-1 text-sm">
                  {pet.type} • {pet.age}
                </p>
                <button className="mt-4 w-full border border-teal-500 text-teal-600 hover:bg-teal-50 py-2 rounded-full text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

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
