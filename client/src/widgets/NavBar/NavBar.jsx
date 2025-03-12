import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

export default function NavBar({ logoutHandler, user }) {
  console.log(user);

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>
          {user.status === "logged" ? user.data.name : "Guest"}
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to={"/"}>
            {" "}
            Главная
          </NavLink>
          <NavLink className="nav-link" to={"/advices"}>
            {" "}
            Советы
          </NavLink>
          {user.status !== "logged" && (
            <>
              {" "}
              <NavLink className="nav-link" to={"/signup"}>
                {" "}
                Регистрация
              </NavLink>
              <NavLink className="nav-link" to={"/login"}>
                {" "}
                Вход
              </NavLink>
            </>
          )}
        </Nav>
        {user.status === "logged" && (
          <Nav>
            {" "}
            <Button onClick={logoutHandler} size="sm" variant="light">
              {" "}
              Выход
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}