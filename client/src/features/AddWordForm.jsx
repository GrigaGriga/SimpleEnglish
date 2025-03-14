import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axiosInstance from "../shared/libs/axiosInstance";
import { useNavigate } from "react-router";
import { Col, Row } from "react-bootstrap";

export default function AddWordForm() {
  const navigate = useNavigate();
  const [showErr, setShowErr] = useState(false);
  const [input, setInput] = useState({ cardTitle: null, url: null, eng: null, rus: null});
  const [show, setShow] = useState({ cardTitle: false, url: false });
  const [showAdded, setShowAdded] = useState(false);

  const addHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    // console.log(formData);
    if (!formData.cardTitle || !formData.eng || !formData.rus) {
      return setShowErr(true)
    }
    axiosInstance.post("/words", formData).then((res) => {
      setInput({ cardTitle: '', url: '', eng: '', rus: '' })
      setShowErr(false)
      setShow(false)
      setShowAdded(true)
      // alert("Слово добавлено");
    }).catch(console.log);
  };

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    if (event.target.value) {
      setShow({ cardTitle: true, url: true });
    } else {
      setShow({ cardTitle: false, url: false });
    }
  };

  return (
    <Form onSubmit={addHandler}>
      {showAdded && <div style={{margin: '10px', color:'green'}}>Слово добавлено</div>}
      <InputGroup>
        <InputGroup.Text id="inputGroup-sizing-default">Тема</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="cardTitle"
          type="text"
          onChange={changeHandler}
          value={input.cardTitle}
        />
      </InputGroup>
      {show.url ? (
        <div style={{ margin: "10px" }}>
          Если тема новая добавьте ссылку на картинку
        </div>
      ) : (
        <br />
      )}
      <InputGroup>
        <InputGroup.Text id="inputGroup-sizing-default">
          Ссылка на кртинку
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="url"
          type="text"
          onChange={changeHandler}
          value={input.url}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroup.Text id="inputGroup-sizing-lg">
          Слово на английском
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name="eng"
          type="text"
          onChange={changeHandler}
          value={input.eng}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroup.Text id="inputGroup-sizing-lg">
          Слово на русском
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name="rus"
          type="text"
          onChange={changeHandler}
          value={input.rus}
        />
      </InputGroup>
      
      {showErr ? <><br /><div style={{color: 'red'}}>Не все поля заполнены</div><br /></> : <br />}
      <Row>
          <Col>
          <Button
          style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              marginLeft: "20px",
              transition: "filter 0.3s ease",
              color:'black'
            }}
          type="submit">Добавить слово</Button>
          </Col>
          <Col >
          <Button 
          style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              marginLeft: "20px",
              transition: "filter 0.3s ease",
              color:'black'
            }}
             onClick={()=>navigate('/user/words')}>Добавленные слова</Button>
          </Col>
        </Row>
    </Form>
  );
}
