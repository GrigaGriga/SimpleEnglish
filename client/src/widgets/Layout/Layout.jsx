import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router";
import Container from "react-bootstrap/esm/Container";
import Loader from "../../shared/hocs/Loader";

export default function Layout({user,logoutHandler}) {
  return (
    <>
      <Container fluid="md">
        <Loader isLoading={user.status === 'logging'}>
          <NavBar logoutHandler={logoutHandler} user={user}/>
          <Outlet />
        </Loader>
      </Container>
    </>
  );
}
