
import React, { useState } from "react";
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from "./widgets/Layout/Layout";
import CardsPage from "./pages/CardsPage";
import WordsPage from "./pages/WordsPage/WordsPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<CardsPage />} />
            <Route path="/" element={<p>123456789</p>} />
        <Route path="/cards/:id" element={<WordsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
