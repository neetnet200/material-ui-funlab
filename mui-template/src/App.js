import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import FunWithGrid from "./components/funWithGrid";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/funWithGrid" element={<FunWithGrid/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
