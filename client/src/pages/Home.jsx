import React from 'react'
import { Navbar } from '../components/Navbar'
import { useSelector } from "react-redux";


const Home = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
        <Navbar/>
        <div className='flex-1 px-6 py-20 '></div>
    </div>
  )
}

export default Home