import React from 'react'
import Layout from './Layout'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const LangPage = (props) => {
    
  return (
    <div>
        <div className='bg-[#24232f] w-full h-[25rem] px-20 text-white grid grid-cols-2 items-center mb-5'>
            <div className=' space-y-10'>
                <h1 className='text-6xl font-extrabold'>{props.language} projects</h1>
                
            </div>
            <div className='flex space-x-10 w-full h-full items-end justify-end mb-20'>
                <FaGithub className='cursor-pointer' size={40} color='#fff'/>
                <AiOutlineLinkedin className='cursor-pointer' size={40} color='#fff'/>
                <AiFillTwitterCircle className='cursor-pointer' size={40} color='#fff'/>
            </div>
        </div>
        {/* */}
        <div className='rounded-lg overflow-x-auto overflow-y-hidden h-[17rem] p-2 flex items-center w-full bg-[#24232f]'>
            <div className='w-max flex items-center newsList'>
            <props.projects/>
            </div>
        </div>
    </div>
  )
}

export default LangPage