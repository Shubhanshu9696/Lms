import React from 'react'
import { Dashboard } from './Dashboard'
import { SignupForm } from '../components/SignupForm'
// import { Login } from './Login'
// import { useNavigate } from 'react-router-dom'
export const Home = ({isLoggedIn}) => {

  // const navigate = useNavigate()
  const key = localStorage.getItem("user");

  return (
    <div className='flex justify-center text-white text-3xl h-screen' >
      {key ? (
        <Dashboard/>
      ) : <SignupForm/>}
    </div>
  )
}
