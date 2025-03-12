import { Routes, Route } from "react-router";
import { useState } from 'react'
//import './App.css'
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"
import React from 'react'


function App() {
  const [user, setUser] = useState({ status: "logging", data: null });
  return (
    <>
     <Routes>
     <Route path="/signup" element={<SignUpPage setUser={setUser}/>} />
     <Route path="/login" element={<LoginPage setUser={setUser}/>} />
     <Route path="*" element={<h1>No content</h1>} />
     </Routes>
    </>
  )
}

export default App
