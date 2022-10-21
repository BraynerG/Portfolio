import React from 'react'
import {TbBrandJavascript} from 'react-icons/tb'
import {ImHtmlFive2} from 'react-icons/im'
import {DiNodejs, DiReact, DiPython, DiJava} from 'react-icons/di'
import { TbCSharp } from 'react-icons/tb'
import { SiCplusplus } from 'react-icons/si'
import Link from 'next/link'
import { Lang, ProgressBar } from './Templates'
import Head from 'next/head'
import { CSharp } from './Logo'

const Layout = ({children}) => {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-flow-row bg-[#1f1d29] p-3 lg:h-screen md:h-screen'>
        
        <Head>
            <title>Brayner</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name='description'/>
            <link rel='icon' href='/Resume.svg'></link>
        </Head>
        
        <div className='bg-[#201f2b] h-[98vh] rounded-xl'>
            <Link href={"/"}>
                <div className='bg-[#24232f] p-7 text-center justify-center space-y-0 cursor-pointer'>
                    <img className='rounded-full self-center lg:mx-5 lg:scale-75 lg:visible lg:h-auto md:h-auto md:visible invisible h-0' src="/Brayner.png"></img>
                    <h1 className='text-lg text-white font-bold'>Brayner Gonzalez Mendez</h1>
                    <h1 className='text-base font-bold text-slate-500'>App Developer</h1>
                </div>
            </Link>
            <div className='rounded-b-xl p-5 text-white font-medium grid grid-cols-2 items-center'>
                <p>Spanish</p>
                <div className="w-fill bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full w-[100%]"></div>
                </div>
            </div>
            <div className='rounded-b-xl p-5 text-white font-medium grid grid-cols-2 items-center'>
                <p>English</p>
                <div className="w-fill bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                </div>
            </div>

            <div className='border-t border-[#3c3a51] m-1 grid'/>

            <Lang name="Javascript" img={<TbBrandJavascript className='ml-5 scale-150'/>}/>
            <Lang showName="C#" name={"C%23"} img={<CSharp className='ml-5 scale-[175%]'/>}/>
            <Lang name="Java" img={<DiJava className='ml-5 scale-[250%]'/>}/>
            <Lang name="Python" img={<DiPython className='ml-5 scale-[250%]'/>}/>
            <Lang name="C++" img={<SiCplusplus className='ml-5 scale-150'/>}/>
           
        </div>
        <div className=' lg:col-span-4 md:col-span-3 pl-5 h-full'>
            {children}
        </div>
    </div>
  )
}



export default Layout