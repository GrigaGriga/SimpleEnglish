import React from 'react'
import SignUpForm from '../features/SignUpForm'

export default function SignUpPage({setUser, user}) {
  return (
    <SignUpForm setUser={setUser} user={user}/>
  )
}
