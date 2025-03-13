import React from 'react'
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserValidate from '../entities/user/UserValidate';
import axiosInstance, { setAccessToken } from "../shared/libs/axiosInstance";
import { useNavigate } from 'react-router';

export default function SignUpForm({setUser}) {
  const navigate = useNavigate();
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
    });
  };
  return (
    <>
    <div color='rgb(255, 201, 201)
'>
    <Form onSubmit={signUpHandler}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          name="userName"
          type="text"
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
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name="password"
          type="password"
        />
      </InputGroup>
      <br />
      <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Repeat Password
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            name="repeatPassword"
            type="password"
          />
        </InputGroup>
        <br />
      <Button onClick={() => navigate('/login')}> Войти</Button>
      <Button type="submit" onClick={()=> navigate('/')}> Зарегистрироваться</Button>
    </Form>
    </div>
  </>
  )
}