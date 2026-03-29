import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "./components/layout/ClientLayout";
import Home from "./pages/Home";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail";
import Host from "./pages/Host";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<CarList />} />
          <Route path="cars/:id" element={<CarDetail />} />
          <Route path="host" element={<Host />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
