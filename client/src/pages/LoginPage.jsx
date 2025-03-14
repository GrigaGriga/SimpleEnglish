import React from 'react'
import LoginForm from '../features/LoginForm'

export default function LoginPage({setUser, user}) {
  return (
    <LoginForm setUser={setUser} user={user}/>
  )
}
