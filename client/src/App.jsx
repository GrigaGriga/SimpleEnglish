import React, { useState } from "react";
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from "./widgets/Layout/Layout";
import CardsPage from "./pages/CardsPage";
import WordsPage from "./pages/WordsPage/WordsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"

function App() {
  const [user, setUser] = useState({ status: "logging", data: null });
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<CardsPage />} />
            <Route path="/" element={<p>123456789</p>} />
        <Route path="/cards/:id" element={<WordsPage />} />
              <Route path="/signup" element={<SignUpPage setUser={setUser}/>} />
     <Route path="/login" element={<LoginPage setUser={setUser}/>} />
     <Route path="*" element={<h1>No content</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
