import React, { useState } from "react";
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from "./widgets/Layout/Layout";
import CardsPage from "./pages/CardsPage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<CardsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
