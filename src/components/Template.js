import React from 'react'
import bgImage from '../assets/bgImage.jpg'
import { SignupForm } from '../components/SignupForm'
import { LoginForm } from '../components/LoginForm'
import {FcGoogle} from "react-icons/fc"
export const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className='flex w-11/12 justify-between max-w-[1160px] py-12  mx-auto gap-x-12 gap-y-0  text-start'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 
                    className='text-white font-semibold text-[1.875rem] leading-[2.375]'>
                    {title} 
                </h1>
                <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                    <span className='text-gray-100'>{desc1}</span>
                    <br></br>
                    <span className='text-blue-300 italic'>{desc2}</span>
                </p>
                {formtype === "signup" ? <SignupForm setIsLoggedIn = {setIsLoggedIn} /> : <LoginForm setIsLoggedIn = {setIsLoggedIn} />}
                
                <div className='flex w-full items-center my-2 gap-x-2 '>
                    <div className='w-full h-[1px] bg-slate-600'></div>
                    <p className='text-slate-500 font-medium leading[1.375rem]'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-slate-600'></div>
                </div>

                <button className='flex text-gray-200 w-full justify-center items-center rounded-[9px] font-medium border border-gray-600 px-[12px] py-[8px] gap-x-2 mt-6 ' >
                    <FcGoogle/>
                    <p>Signup with google</p>
                </button>

            </div>

            <div className='relative w-11/12 max-w-[450px] mx-auto'>
                <img
                    src={bgImage}
                    alt='background'
                    width={558}
                    height={400}
                    loading='lazy'
                    className=' h-3/5'
                />
                <img
                    src={image}
                    alt='background'
                    width={558}
                    height={596}
                    // loading='lazy'
                    className='absolute  top-2 right-3  '
                />
            </div>

        </div>
    )
}
