import React from 'react'
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function LoginForm({setUser}) {
    const loginHandler = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        if (!formData.email || !formData.password) {
          return alert("Missing required fields");
        }
        axios.post("/api/auth/login", formData).then((res) => {
          setUser({ status: "logged", data: res.data.user });
        });
      };
  return (
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
      <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
      <Form.Control
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        name="password"
        type="password"
      />
    </InputGroup>
    <br />
    <Button type="submit"> Подтвердить</Button>
  </Form>
  )
}