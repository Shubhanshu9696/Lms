import React from 'react'
import { Template } from '../components/Template'
import signupImage from '../assets/signupImage.jpg'
export const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title = "Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2= "Education to future-proof your career."
      image={signupImage}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
