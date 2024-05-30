import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [FormData, setFormData] = useState(
        { firstname: "", lastname: "", email: "", createPassword: "", confirmPassword: "" }
    )

    const [showPassword, setShowPassword] = useState(false);
    
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const[accountType, setAccoutType] = useState("student");

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }


    async function submitHandler(event){
        event.preventDefault();
        if(FormData.createPassword !== FormData.confirmPassword){
            toast.error("Password mismatch");
            return ;
        }

        try {
            
            const user = await axios.post('http://localhost:4000/register', {
                name: FormData.firstname + " " + FormData.lastname,
                email: FormData.email,
                password: FormData.createPassword
            })

            localStorage.setItem('user', user.data._id )

        } catch (error) {
            console.log(error);
            return
        }



        setIsLoggedIn(true);
        toast.success("Account created")

        const finalData = {
            ...FormData , 
            accountType
        }
        console.log("printing account data");
        console.log(finalData);
        // const acc ={      // just for checking data
        //     ...FormData
        // }
        // console.log(acc)
        navigate('/dashboard');
    }



    return (
        <div>
            {/* BUTTONS */}
            <div className='flex bg-slate-900 gap-x-1 my-6 rounded-full max-w-max'>

                        {/* student button */}
                <button 
                    className={`${accountType === "student" ?"bg-slate-950 text-gray-100":"bg-transparent text-gray-400"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>setAccoutType("student")}>Normal
                </button>

                        {/* instructor button */}
                <button
                    className={`${accountType === "instructor" ?"bg-slate-950 text-gray-100":"bg-transparent text-gray-400"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>setAccoutType("instructor")}>Subscription
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* Name */}
                <div className='flex gap-x-4 mt-14'>
                    <label>
                        <p className='text-gray-100 text-[0.96rem] mb-1 leading-[1.375rem] '>First Name <sup className='text-pink-400'>*</sup></p>
                        <input
                            required
                            name='firstname'
                            type='text'
                            value={FormData.firstname}
                            onChange={changeHandler}
                            placeholder='First Name'
                            className='w-full  rounded-[0.5rem] bg-slate-900 text-gray-100'
                        />
                    </label>
                    <label>
                        <p className='text-gray-100 text-[0.96rem] mb-1 leading-[1.375rem] '>Last Name <sup className='text-pink-400'>*</sup></p>
                        <input
                            required
                            name='lastname'
                            type='text'
                            value={FormData.lastname}
                            onChange={changeHandler}
                            placeholder='Last Name'
                            className='w-full  rounded-[0.5rem] bg-slate-900 text-gray-100'
                        />
                    </label>
                </div>

                {/* email */}
                <label className='w-full mt-4'>
                    <p className='text-gray-100 text-[0.96rem] mb-1 leading-[1.375rem] mt-4'>Email Address<sup className='text-pink-400'>*</sup></p>
                    <input
                        required
                        name='email'
                        type='email'
                        value={FormData.email}
                        onChange={changeHandler}
                        placeholder='Email Address'
                        className='w-full  rounded-[0.5rem] bg-slate-900 text-gray-100'
                    />
                </label>

                {/* Password */}
                <div className='flex gap-x-4 mt-4'>
                    <label className='w-full relative'>
                        <p className='text-gray-100 text-[0.96rem] mb-1 leading-[1.375rem] '>Create Password<sup className='text-pink-400'>*</sup></p>
                        <input
                            required
                            name='createPassword'
                            type={showPassword ? ('text') : ("password")}
                            value={FormData.createPassword}
                            onChange={changeHandler}
                            placeholder='Create Password'
                            className='w-full  rounded-[0.5rem] bg-slate-900 text-gray-100'
                        />
                        <span className='absolute right-3 top-[29px] cursor-pointer text-gray-400'
                         onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#ABF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#ABF'/>)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-gray-100 text-[0.96rem] mb-1 leading-[1.375rem] '>Confirm Password<sup className='text-pink-400'>*</sup></p>
                        <input
                            required
                            name='confirmPassword'
                            type={showConfirmPassword ? ('text') : ("password")}
                            value={FormData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            className='w-full  rounded-[0.5rem] bg-slate-900 text-gray-100'
                        />
                        <span className='absolute right-2 top-[29px] cursor-pointer text-gray-400'
                         onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#ABF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#ABF'/>)}
                        </span>

                    </label>

                </div>

                <button className='flex w-full justify-center items-center border rounded-[8px] border-yellow-500 bg-amber-500 mt-5 mb-4 px-[12px] py-[8px] ' > Create Account</button>
                <div className='text-blue-300'>
                    <p className='underline underline-offset-4 '> <span >  <a href='/login'>Already have an account? Login</a>  </span></p>
                </div>
            </form>

        </div>
    )
}
