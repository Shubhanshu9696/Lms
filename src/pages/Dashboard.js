import React from 'react'
import { SearchPage } from './SearchPage'
import CommentSection from './CommentSection'
import Footer from './Footer'

export const Dashboard = () => {
  return (
    <div className='text-white h-screen' >
      <SearchPage/>
      <CommentSection/>
      <Footer/>
    </div>
  )
}
