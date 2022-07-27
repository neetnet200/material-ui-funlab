import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
