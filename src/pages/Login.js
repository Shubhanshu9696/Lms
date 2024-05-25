import React from 'react'
import { Template } from '../components/Template'
import login from '../assets/login.jpg'

export const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title = "Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2= "Education to future-proof your career."
      image={login}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
