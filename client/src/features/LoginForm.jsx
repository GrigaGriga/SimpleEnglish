import React, { useState } from 'react'
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axiosInstance, { setAccessToken } from "../shared/libs/axiosInstance";
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/esm/Container';


export default function LoginForm({setUser, user}) {
const [input, setInput] = useState({email:'', password:''})
const [show, setShow] = useState(false);


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
          navigate("/");
  })
  .catch((err) => {
    setShow(true);
    console.error(err);
        });
        
      };

      
  return (
    <Container style={{
      backgroundColor: 'rgb(255, 201, 201)',
      padding: '20px',
      transition: "filter 0.3s ease",
      borderRadius: '10px',
    }}>
      <h2>Вход</h2>
    <Form onSubmit={loginHandler}>
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        name="email"
        type="email"
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}

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
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}

      />
    </InputGroup>
    {show && <div style={{ color:'red',fontSize: '13px', marginTop: '2px'
}}>Неверный пароль или email</div>}
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
            }} type="submit" > Войти</Button>
  </Form>
  </Container>
  )
}