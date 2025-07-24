// src/Components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // ✅ Adjust path if needed
import Footer from "./Footer"; // ✅ Adjust path if needed

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 200px)" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
