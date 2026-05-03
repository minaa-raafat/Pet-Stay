import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/HomePagePetCare";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/LoginPage";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/UserProfile/UserProfile";

// Dashboard
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";

// Cats
import AddNewCat from "../pages/Cats/AddNewCat/AddNewCat";
import AdoptRequest from "../pages/Cats/AdoptRequest/AdoptRequest";
import AllCats from "../pages/Cats/AllCats/AllCats";
import CatDetails from "../pages/Cats/CatDetails/CatDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User */}
      <Route path="/user-profile" element={<UserProfile />} />

      {/* Dashboards */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />

      {/* Cats */}
      <Route path="/add-new-cat" element={<AddNewCat />} />
      <Route path="/adopt-request" element={<AdoptRequest />} />
      <Route path="/all-cats" element={<AllCats />} />

      {/* الأفضل يكون dynamic route */}
      <Route path="/cat-details/:id" element={<CatDetails />} />

      {/* fallback (اختياري مهم جدًا) */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;