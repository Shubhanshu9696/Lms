import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
// import logo1 from '../assets/logo1.png'
import melody_music_n from '../assets/melody_music_n.png'
export const Navbar = (props) => {

  let isLogedIn = props.isLogedIn;
  let setisLogedIn = props.setisLogedIn;
  return (
    <div className='flex justify-between items-center  w-11/12 max-w-[1360px] py-1 px-2 mx-auto shadow-md shadow-slate-600 mb-2 inset-x-0 text-white'>

      <Link to="/">
        <img src={melody_music_n} alt='Logo' width={260} height={10} loading='lazy' />
      </Link>

      <nav >
        <ul className='flex gap-x-10 text-white '>
          <li>
            <Link to="/home" className='text-white no-underline text-2xl shadow-md shadow-slate-600 inset-x-0'>Home</Link>
          </li>
          <li>
            <Link to="https://testimonial-website.netlify.app/" className='text-white no-underline text-2xl shadow-md shadow-slate-600 inset-x-0'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='text-white no-underline text-2xl shadow-md shadow-slate-600 inset-x-0'>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center text-white gap-x-4'>
        {!isLogedIn &&
          <Link to="/login">
            <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black text-white '>
              Login
            </button>
          </Link>
        }

        {!isLogedIn &&
          <Link to="/signup">
            <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black text-white '>
              signup
            </button>
          </Link>
        }
        {isLogedIn &&
          <Link to="/">
            <button onClick={()=>{
              setisLogedIn(false);
              toast.success('Logged Out Successfully')
              localStorage.removeItem('user')
            }} className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black text-white '> 
              Logout
            </button>
          </Link>
        }
        {isLogedIn &&
          <Link to="/dashboard">
            <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-black text-white '>
              Dashboard
            </button>
          </Link>
        }

      </div>

    </div>
  )
}
