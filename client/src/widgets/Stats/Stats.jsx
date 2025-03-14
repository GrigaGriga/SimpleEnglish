import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Stats({ stat }) {
  const space = " ";
  // console.log(stat);
  const perscent = Math.round((stat.countWords / stat.Card.Words.length) * 100);
  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <Row style={{ width: "100%" }}>
          <Col style={{ width: "200px" }}>
            <div style={{ textAlign: "center" }}>{stat.Card.title}</div>
          </Col>
          <Col style={{ width: "400px" }}>
            <>{perscent} %</>
            <ProgressBar animated variant="warning" now={perscent} />
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}
