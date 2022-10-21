import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Layout from '../components/Layout'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import {NewsCard} from '../components/Templates'
import { Denario } from '../components/Logo'

export default function Home() {

    const news = [
        {title:"New Job!",description:"Full-stack developer in MyCityHome.es",img:"https://mycityhome.es/wp-content/uploads/2018/02/cropped-ico-mch-1-192x192.png", url:"https://mycityhome.es/"},
        {title:"New Project!",description:"Web3 developer in Denario Network",img:Denario, url:"https://Denario.tech/", isSvg:true},
        {title:"New Project!",description:"Web3 developer in Denario Network",img:Denario, url:"https://Denario.tech/", isSvg:true},
        
    ]

    const NewsCards = () => {
        var res = []
        for (let i = 0; i < news.length; i++) {
            res.push(NewsCard(news[i]))
        }
        return res
    }
  return (
    <Layout>
        <div className='bg-[#24232f] w-full h-[25rem] px-20 text-white grid grid-cols-2 items-center mb-5'>
            <div className=' space-y-10'>
                <h1 className='text-6xl font-extrabold'>Discover my public projects!</h1>
                <div className='text-center rounded-3xl bg-slate-700 p-3 w-24 cursor-pointer hover:scale-110 duration-100'>See more!</div>
                
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
            <NewsCards/>
            </div>
        </div>

        
        
    </Layout>
  )
}
