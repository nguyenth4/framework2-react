import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientLayout from "./components/layout/ClientLayout";
import AdminLayout from "./components/layout/AdminLayout";

// CLIENT PAGES
import Home from "./pages/Client/Home";
import CarList from "./pages/Client/CarList";
import CarDetail from "./pages/Client/CarDetail";
import Host from "./pages/Client/Host";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/Client/About";

// ADMIN PAGES
import Dashboard from "./pages/Admin/Dashboard";
import Cars from "./pages/Admin/Cars";
import AddCar from "./pages/Admin/Cars/AddCar";
import EditCar from "./pages/Admin/Cars/EditCar";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* CLIENT */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<CarList />} />
          <Route path="cars/:id" element={<CarDetail />} />
          <Route path="host" element={<Host />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/add" element={<AddCar />} />
          <Route path="cars/edit/:id" element={<EditCar />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;