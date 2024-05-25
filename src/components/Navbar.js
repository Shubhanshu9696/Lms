import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
export const Navbar = (props) => {

  let isLogedIn = props.isLogedIn;
  let setisLogedIn = props.setisLogedIn;
  return (
    <div className='flex justify-between items-center  w-11/12 max-w-[1160px] py-3 mx-auto shadow-lg inset-x-auto '>

      <Link to="/">
        <img src={logo1} alt='Logo' width={260} height={10} loading='lazy' />
      </Link>

      <nav >
        <ul className='flex gap-x-10 text-white'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center text-white gap-x-4'>
        {!isLogedIn &&
          <Link to="/login">
            <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black '>
              Login
            </button>
          </Link>
        }

        {!isLogedIn &&
          <Link to="/signup">
            <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black '>
              signup
            </button>
          </Link>
        }
        {isLogedIn &&
          <Link to="/">
            <button onClick={()=>{
              setisLogedIn(false);
              toast.success('Logged Out Successfully')
            }} className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black '> 
              Logout
            </button>
          </Link>
        }
        {isLogedIn &&
          <Link to="/dashboard">
            <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black '>
              Dashboard
            </button>
          </Link>
        }

      </div>

    </div>
  )
}
