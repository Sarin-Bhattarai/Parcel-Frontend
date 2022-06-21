import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Parcel from "./pages/Parcel";
// import Status from "./pages/Status";
import SingleParcel from "./pages/SingleParcel";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcels" exact element={<Parcel />} />
          <Route path="/parcels/:id" exact element={<SingleParcel />} />
          {/* <Route path="/status" exact element={<Status />} /> */}
          <Route path="/login" exact element={<Signin />} />
          <Route path="/register" exact element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
