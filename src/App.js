import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Parcel from "./pages/Parcel";
import Status from "./pages/Status";
import SingleParcel from "./pages/SingleParcel";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcels" exact element={<Parcel />} />
          <Route path="/parcels/:id" exact element={<SingleParcel />} />
          <Route path="/status" exact element={<Status />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
