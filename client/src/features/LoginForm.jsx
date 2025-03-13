import React from 'react'
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axiosInstance, { setAccessToken } from "../shared/libs/axiosInstance";
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/esm/Container';


export default function LoginForm({setUser}) {
  const navigate = useNavigate();
    const loginHandler =  (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        if (!formData.email || !formData.password) {
          return alert("Не все поля заполнены");
        }
        axiosInstance.post("/auth/login", formData).then((res) => {
          setUser({ status: "logged", data: res.data.user });
          setAccessToken(res.data.accessToken);
        });
      };

      
  return (
    <Container style={{
      backgroundColor: 'rgb(255, 201, 201)',
      padding: '20px',
      transition: "filter 0.3s ease",
      borderRadius: '10px',
    }}>
    <Form onSubmit={loginHandler}>
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        name="email"
        type="email"
      />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroup.Text id="inputGroup-sizing-lg">Пароль</InputGroup.Text>
      <Form.Control
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        name="password"
        type="password"
      />
    </InputGroup>
    <br />
    <Button style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              margin: '5px',
              color: 'black',
              transition: "filter 0.3s ease",
            }} onClick={()=> navigate('/signup')}>Зарегистрироваться</Button>
    <Button style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              color: 'black',
              transition: "filter 0.3s ease",
            }} type="submit" onClick={()=> navigate('/')}> Войти</Button>
  </Form>
  </Container>
  )
}