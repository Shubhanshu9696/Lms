import React from 'react'
import { Template } from '../components/Template'
import signupImage from '../assets/signupImage.jpg'
export const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title = "Welcome Back"
      // desc1="Build skills for today, tomorrow, and beyond."
      // desc2= "Education to future-proof your career."
      desc1="Enjoy music for today, tommorow and beyond"
      desc2="Music to enjoy the vibes"
      image={signupImage}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
