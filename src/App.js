import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import Profile from "./pages/Profile";
import Artwork from "./pages/Artwork";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/success" element={<Success />} />
                <Route path="/reset-password/:uid/:token/" element={<ForgetPassword />} />
                <Route path="/profile/:profileId/" element={<Profile />} />
                <Route path="/artwork/:artworkId/" element={<Artwork />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
