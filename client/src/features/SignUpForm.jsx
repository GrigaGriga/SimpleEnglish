import React, { useState } from 'react'
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserValidate from '../entities/user/UserValidate';
import axiosInstance, { setAccessToken } from "../shared/libs/axiosInstance";
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/esm/Container';


export default function SignUpForm({setUser,user}) {

  const navigate = useNavigate();
  const [input,setInput] = useState({userName:'', email:'', password:'',repeatPassword:''})
   const [show, setShow] = useState(false);
   const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if ((input.password.length < 6) && (input.repeatPassword !== input.password)) {
      setShow(true) 
    } else {setShow(false)}
  }

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.userName) {
      return alert("Missing required fields");
    }
    const { isValid, error } = UserValidate.validateSignUp(formData);
    if (!isValid) return alert(error);
    axiosInstance.post("/auth/signup", formData).then((res) => {
      setUser({ status: "logged", data: res.data.userName });
      setAccessToken(res.data.accessToken);
      location.assign('/')
    }).catch(console.log);
    });
    if (!pattern.test(input.email)) {
      setShow(true)
    }
  };

  return (
    < >
    
    <Container style={{
      backgroundColor: 'rgb(255, 201, 201)',
      padding: '20px',
      transition: "filter 0.3s ease",
      borderRadius: '10px',
    }}>
      <h2>Регистрация</h2>
    <Form onSubmit={signUpHandler}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Имя</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          name="userName"
          type="text"
          value={input.userName}
          onChange={changeHandler}
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Email
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="email"
          type="email"
          value={input.email}
          onChange={changeHandler}
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
          onChange={changeHandler}
        />
      </InputGroup>
      {show && <div style={{ color:'red',fontSize: '13px', marginTop: '2px'
}}>Пароль не менее 6 символов</div>}
      <br />
      <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Повтор пароля
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            name="repeatPassword"
            type="password"
            value={input.repeatPassword}
            onChange={changeHandler}
          />
        </InputGroup>
        {show && <div style={{ color:'red',fontSize: '13px', marginTop: '2px'
}}>Пароли не совпадают</div>}
        <br />
      <Button style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              color: 'black',
              margin: '5px',
              transition: "filter 0.3s ease",
            }} onClick={() => navigate('/login')}> Войти</Button>
      <Button style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              color: 'black',
              transition: "filter 0.3s ease",
            }} type="submit" onClick={user.status === "logged" ? ()=> navigate('/') : ()=> navigate('/signup')}> Зарегистрироваться</Button>
    </Form>
    </Container>
    
  </>
  )
}