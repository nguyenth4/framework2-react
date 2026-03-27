import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 400px)" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
