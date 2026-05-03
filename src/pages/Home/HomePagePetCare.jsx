import {Navbar,collaps,typogrphy,IconButton,} 
from "@material-tailwind/react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom"; 

export default function HomePagePetCare() {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const [viewMode, setViewMode] = React.useState(
    localStorage.getItem("viewMode") || "desktop"
  );

  const [showSelector, setShowSelector] = React.useState(false);

  const [location, setLocation] = React.useState("");
  const [petType, setPetType] = React.useState("Cat");
  const [error, setError] = React.useState("");

  const pets = [
    { id: 1, name: "bsbosa", type: "Friendly Cat", age: "3 Monthes",
      image:"https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80"},
    { id: 2, name: "biso", type: "Cute Cat", age: "8 Months",
      image:"https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80"},
    {id: 3, name: "mshmsha", type: "Helpful Cat", age: "1 Year",
      image:"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&q=80"}
  ];

  const handleSearch = () => {
    if (location.trim() === "") {
      setError("Location is required not valid");
      return;
    }

    setError("");
    console.log("Search:", location, petType);
  };
//hna deh mkan el if condation
  const layoutClass =
    viewMode === "mobile"
      ? "max-w-sm mx-auto" //deh kda true
      : viewMode === "tablet"
      ? "max-w-4xl mx-auto"
      : "w-full";

  return (
    //hna kda dah el responsive
    <div className={`min-h-screen bg-[#f7f7f7] text-gray-800 ${layoutClass}`}>

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

        <button //deh hna lazmtha eno lw s8r kan momken a3mlha b typograghy bs el ghaz mst7mlsh
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
              X
            </button>

            <div className="flex flex-col gap-5 text-lg font-medium">

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

      <section className="px-4 sm:px-8 md:px-16 py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Find a <span className="text-teal-500 italic">loving</span>
            <br />
            home for every cat
          </h2>

          <p className="text-gray-500 mt-5 max-w-lg">
            Connecting caring people with pets who need homes.
          </p>

          <div className="bg-white shadow-md rounded-2xl p-4 mt-8 flex flex-col md:flex-row gap-3 w-full max-w-2xl mx-auto">

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded-xl px-4 py-2 w-full md:flex-1"
            />

            <select
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="border rounded-xl px-4 py-2 w-full md:w-auto"
            >
              <option>Cat</option>
              <option>Friendly Cat</option>
              <option>Big Cat</option>
              <option>Small Cat</option>
            </select>

            <button
              onClick={handleSearch}
              className="bg-teal-500 text-white px-6 py-2 rounded-xl"
            >
              Search
            </button>

          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

        </div>

        <div className="bg-white rounded-3xl p-3 shadow-lg w-fit mx-auto">
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=800&q=80"
            alt="Cat"
            className="w-[180px] sm:w-[220px] md:w-[260px] object-contain rounded-2xl"
          />
        </div>

      </section>


      <section className="px-4 sm:px-8 md:px-16 py-12">
        <h3 className="text-2xl font-bold text-center mb-10">
          How it works
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Find Cats", desc: "Search Cats easily." },
            { title: "Meet with cats ", desc: "Meet before adoption." },
            { title: "Adopt Cat", desc: "Take your cat home." }
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 flex items-center justify-center rounded-full mx-auto mb-4 font-bold">
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
          <Link to="/all" className="text-teal-600">
            View all Cats
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-3xl shadow-md overflow-hidden">
              <img src={pet.image} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold">{pet.name}</h4>
                <p className="text-gray-500 mt-2">
                  {pet.type} • {pet.age}
                </p>
                <button className="mt-5 w-full border border-teal-500 text-teal-600 py-2 rounded-full">
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