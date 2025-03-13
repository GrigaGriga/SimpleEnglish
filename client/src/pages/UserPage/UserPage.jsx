import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AddWordForm from "../../features/AddWordForm";
import Stats from "../../widgets/Stats/Stats";
import axiosInstance from "../../shared/libs/axiosInstance";

export default function UserPage({user}) {
    const [stats, setstats] = useState([]);

    useEffect(() => {
      axiosInstance.get(`/stats/`).then((res) => setstats(res.data));
    }, []);

    console.log(stats)

  return (
    <>
      <Container>
        <Row>
            <Col >
            {stats.map(stat=> 
              <Stats Key={stat.id} stat={stat}/>
            )}
              
            </Col>
            <Col >
              <AddWordForm />
            </Col>
        </Row>
      </Container>
    </>
)
}
