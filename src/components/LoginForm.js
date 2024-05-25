import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';


export const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [FormData, setFormData] = useState(
        { email: "", password: "" }
    );

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard");
    }
    return (
        <form onSubmit={submitHandler} 
            className='flex flex-col w-full gap-y-3 mt-6'
        >
            <label className='w-full'>
                <p className='text-gray-100 text-[0.96rem] mb-1 leading-[1.375rem] '>
                    Email Addresss <sup className='text-pink-400'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    name='email'
                    value={FormData.email}
                    onChange={changeHandler}
                    placeholder='Enter your email'
                    className='w-full  rounded-[0.5rem] bg-slate-900 text-gray-100'
                />
            </label>
            
            <label className='w-full relative'>
                <p className='text-gray-100 text-[0.96rem] mb-1 leading-[1.375rem] '>
                    Password <sup className='text-pink-400'>*</sup>
                </p>
                
                <input
                    required
                    type={showPassword ? ('text') : ('password')}
                    name='password'
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Password'
                    className='w-full  rounded-[0.5rem] bg-slate-900 text-gray-100 '
                />
                <span className='absolute right-3 top-[29px] cursor-pointer text-gray-400' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#ABF' />) : (<AiOutlineEye fontSize={24} fill='#ABF'/>)}
                </span>
            </label>
            <Link to="#">
                    <p className='text-xs  text-blue-500 w-max  ml-auto ' >
                        Forget Password
                    </p>
            </Link>

            <br></br>
            <button className='flex w-full justify-center items-center border rounded-[8px] border-yellow-500 bg-amber-500 mb -5 px-[12px] py-[8px] '>
                Sign In
            </button>
            

        </form>
    )
}
