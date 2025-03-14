import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AddWordForm from "../../features/AddWordForm";
import Stats from "../../widgets/Stats/Stats";
import axiosInstance from "../../shared/libs/axiosInstance";

export default function UserPage({ user }) {
  const [stats, setstats] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/stats/`).then((res) => setstats(res.data));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col >
            <h2>Статистика</h2>
            <br />
            <br />
            {stats.map((stat) => (
              <Stats key={stat.id} stat={stat} />
            ))}
          </Col>
          <Col >
            <h2>Добавление слов</h2>
            <br />
            <br />
            <AddWordForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}
