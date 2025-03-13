import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./widgets/Layout/Layout";
import CardsPage from "./pages/CardsPage";
import WordsPage from "./pages/WordsPage/WordsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import axiosInstance, { setAccessToken } from "./shared/libs/axiosInstance";
import ProtecteRouter from "./shared/hocs/ProtecteRouter";

function App() {
  const [user, setUser] = useState({ status: "logging", data: null });

  const logoutHandler = async () => {
    axiosInstance.get("/auth/logout").then(() => {
      setUser({ status: "guest", data: null });
      setAccessToken("");
    });

  };
  useEffect(() => {
    axiosInstance("/tokens/refresh")
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: "logged", data: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null });
        setAccessToken("");
      });
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
          <Route path="/main" element={<CardsPage />} />

          <Route path="/" element={<p>123456789</p>} />
          <Route path="/cards/:cardId" element={<WordsPage user={user} />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
