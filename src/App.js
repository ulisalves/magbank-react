import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/"
          element={<Home handleClick={() => setShowModal(true)} />}
        />

        {/*<Route path="/" exact>
             <Home handleClick={() => setShowModal(true)} />
            </Route>
            <Route path="/login" element={<h2>Hello React Router!</h2>} /></Routes>*/}

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default App;
