import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../ui/Client/Header";
import Footer from "../../ui/Client/Footer";

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
