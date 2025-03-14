import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./widgets/Layout/Layout";
import CardsPage from "./pages/CardsPage/CardsPage";
import WordsPage from "./pages/WordsPage/WordsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import axios from "axios";
import axiosInstance, { setAccessToken } from "./shared/libs/axiosInstance";
import ProtecteRouter from "./shared/hocs/ProtecteRouter";
import UserWordsPage from "./pages/UserWordsPage/UserWordsPage";


function App() {
  const [user, setUser] = useState({ status: "logging", data: null });

  const logoutHandler = async () => {
    axiosInstance.get("/auth/logout").then(() => {
      setUser({ status: "guest", data: null });
    }).catch(console.log);
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
          <Route
            element={
              <ProtecteRouter
                isAllowed={user.status === "logged"}
                redirectTo={"/login"}
              />
            }
          >
            <Route path="/main" element={<CardsPage />} />
            <Route path="/" element={<CardsPage />} />
            <Route path="/cards/:cardId" element={<WordsPage user={user} />} />
            <Route path="/user" element={<UserPage user={user} />} />
            <Route path="/user/words" element={<UserWordsPage user={user} />} />
          </Route>


  <Route element={<ProtecteRouter isAllowed={user.status !== 'logged'} redirectTo={'/'}/>}>

          <Route path="/signup" element={<SignUpPage setUser={setUser} user={user}/>} />
          <Route path="/login" element={<LoginPage setUser={setUser} user={user}/>} />

      
          </Route>

         </Route>
    </Routes>
    </ >

  );
}

export default App;
