import React, { useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";

export default function CatDetails() {
  const { id } = useParams();

  const [menuOpen, setMenuOpen] = useState(false);

  const [viewMode, setViewMode] = useState(
    localStorage.getItem("viewMode") || "desktop"
  );

  const [showSelector, setShowSelector] = useState(false);

  // ✅ كل الداتا (وفيها الـ 3 بتوعك)
  const cats = [
    {
      id: 1,
      name: "bsbosa",
      type: "Friendly Cat",
      age: "3 Months",
      gender: "Female",
      color: "White & Orange",
      description:
        "A very friendly and playful kitten. Loves cuddles and playing with toys.",
      image:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "biso",
      type: "Cute Cat",
      age: "8 Months",
      gender: "Male",
      color: "Gray",
      description:
        "Calm and cute cat. يحب النوم كتير وهادي جدًا.",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "mshmsha",
      type: "Helpful Cat",
      age: "1 Year",
      gender: "Female",
      color: "Brown",
      description:
        "Smart cat and loves humans. Always active and playful.",
      image:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&q=80",
    },

    // ✅ داتا زيادة
    {
      id: 4,
      name: "lolo",
      type: "Lazy Cat",
      age: "2 Years",
      gender: "Male",
      color: "Black",
      description:
        "Lazy but adorable. Perfect for relaxed homes.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    },
    {
      id: 5,
      name: "coco",
      type: "Playful Cat",
      age: "6 Months",
      gender: "Female",
      color: "Mixed",
      description:
        "Very playful and energetic kitten.",
      image:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    },
  ];

  const cat = cats.find((c) => c.id === parseInt(id));

  const layoutClass =
    viewMode === "mobile"
      ? "max-w-sm mx-auto"
      : viewMode === "tablet"
      ? "max-w-4xl mx-auto"
      : "w-full";

  if (!cat) {
    return <div className="p-10 text-center">Cat not found</div>;
  }

  return (
    <div className={`min-h-screen bg-gray-100 ${layoutClass}`}>

      {/* زرار اختيار الجهاز */}
      <button
        onClick={() => setShowSelector(true)}
        className="fixed bottom-6 right-6 bg-teal-500 text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        View Website
      </button>

      {/* popup */}
      {showSelector && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-80 text-center shadow-lg">

            <h2 className="text-xl font-bold mb-4">Choose Device View</h2>

            {["mobile", "tablet", "desktop"].map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setViewMode(mode);
                  localStorage.setItem("viewMode", mode);
                  setShowSelector(false);
                }}
                className="w-full bg-gray-100 py-2 rounded-xl mb-2"
              >
                {mode}
              </button>
            ))}

          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between">

        <h1 className="text-xl font-bold text-teal-600">
          WhereMy Home
        </h1>

        <nav className="hidden md:flex gap-6">

          <NavLink to="/" className="text-gray-600">
            Home
          </NavLink>

          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>

        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          ☰
        </button>

      </header>

      {/* المحتوى */}
      <div className="p-6 md:p-12">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">

          <img
            src={cat.image}
            className="w-full h-full object-cover"
          />

          <div className="p-8 flex flex-col justify-center">

            <h2 className="text-3xl font-bold mb-3">{cat.name}</h2>

            <p className="text-gray-500 mb-2">
              {cat.type} • {cat.age}
            </p>

            <p className="mt-4 text-gray-600">
              {cat.description}
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>Gender: {cat.gender}</p>
              <p>Color: {cat.color}</p>
            </div>

            <button className="mt-6 bg-teal-500 text-white py-3 rounded-xl">
              Adopt Me 🐾
            </button>

          </div>

        </div>

        {/* زرار رجوع */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-teal-600">
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
}