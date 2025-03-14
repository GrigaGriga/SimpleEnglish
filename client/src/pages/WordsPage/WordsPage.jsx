import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance, { setAccessToken } from "../../shared/libs/axiosInstance";
import OneWord from "../../widgets/OneWord/OneWord";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WordsPage = ({user}) => {
  const navigate = useNavigate();
  const [words, setWords] = useState([]);
  const { cardId } = useParams();
console.log(words)

  useEffect(() => {
    axiosInstance.get(`/words/${cardId}`).then((res) => setWords(res.data)).catch(console.log)
  }, []);

  if(words.length===0){
    navigate('/main')
  }

  const deleteFromUserWord = async(event, word) => {
    event.stopPropagation()
    try {
      const res = await axiosInstance.post(`/solve/`, {wordId:word.id, userId:user.data.id, cardId:word.wordCardId });
      if (res.status === 201) {
        console.log(11111, res)
        setWords((prev)=>prev.filter((el) => el.id !== word.id))
      }
    } catch (error) {
      console.log(error);
      alert("Что-то пошло не так");
    }
  };
  return (
    <>
      <Container style={{marginTop:'100px'}}>
        <Row>
          {words?.map((el) => (
            <Col style={{marginBottom: '20px',}} key={el.id}>
              <OneWord word={el} deleteFromUserWord={deleteFromUserWord}></OneWord>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WordsPage;
