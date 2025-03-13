import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance, { setAccessToken } from "../../shared/libs/axiosInstance";
import OneWord from "../../widgets/OneWord/OneWord";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WordsPage = ({user}) => {
  const [words, setWords] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance.get(`/cards/${id}`).then((res) => setWords(res.data));
  }, []);
  return (
    <>
      <Container style={{marginTop:'100px'}}>
        <Row>
          {words.map((el) => (
            <Col style={{marginBottom: '20px',}} key={el.id}>
              <OneWord word={el} user={user}></OneWord>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WordsPage;
