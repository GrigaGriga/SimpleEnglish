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
          <Col style={{ marginRight: "50px", marginBottom:'50px', backgroundColor: 'rgb(255, 201, 201)', borderRadius: '10px', minHeight:'410px', minWidth:'400px' }}>
            <h2 style={{marginBottom:'40px'}}>Статистика</h2>
            {stats.length > 0 ? (
              <>
                {stats?.map((stat) => (
                  <Stats
                    style={{ marginRight: "0px" }}
                    key={stat.id}
                    stat={stat}
                  />
                ))}
              </>
            ) : (
              <>
                <br />
                <h4>Ничего не изучено</h4>
              </>
            )}
          </Col>
          <Col style={{ marginLeft: "50px", backgroundColor: 'rgb(255, 201, 201)', borderRadius: '10px', height:'410px', minWidth:'400px'}}>
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
