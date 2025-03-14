import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axiosInstance from "../../shared/libs/axiosInstance";
import OneUserWord from "../../widgets/OneUserWord/OneUserWord";

export default function UserWordsPage({ user }) {
  const [words, setWords] = useState([]);
  // console.log(words)
  useEffect(() => {
    axiosInstance.get(`/user/word`).then((res) => setWords(res.data)).catch(console.log)
  }, []);

  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          {words.length > 0 ? (
            <>
              {words.map((el) => (
                <Col style={{ marginBottom: "20px" }} key={el.id}>
                  <OneUserWord
                    key={el.id}
                    word={el}
                    setWords={setWords}
                  ></OneUserWord>
                </Col>
              ))}
            </>
          ) : (
            <h2>Добавленных слов нет</h2>
          )}
        </Row>
      </Container>
    </>
  );
}
