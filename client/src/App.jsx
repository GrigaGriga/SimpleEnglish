import { Routes, Route } from "react-router";
// import { useState } from "react";
import "./App.css";
import WordsPage from "./pages/WordsPage/WordsPage";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<p>123456789</p>} />
        <Route path="/cards/:id" element={<WordsPage />} />
      </Routes>
    </>
  );
}

export default App;
