import React from "react";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer"; 
import AdminLogin from "../components/admin/AdminLogin";

const AdminLoginPage = () => {
  return (
    <div>
      <Navbar />
      <AdminLogin />
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
