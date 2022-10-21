import React from 'react'
import Link from 'next/link'

export const NewsCard = (props) => {
    return (
        
        <a href={props.url} target="_blank" className='h-[15rem] w-52 rounded-xl p-1 flex flex-col text-center text-white m-1 bg-[#1f1d29]'>
            {(()=>{
                if(props.isSvg == true)
                    return <props.img className='w-24 h-28 self-center hover:scale-110 duration-100'/>
                else
                    return <img className='w-28 h-28 self-center hover:scale-110 duration-100' src={props.img}/>
            })()}
            
            <h2 className='text-2xl font-medium '>{props.title}</h2>
            <h2>{props.description}</h2>
        </a>
        
    )
}

export const projectCard = (props) => {
    return (
        <a href={props.url} target="_blank" className='h-[15rem] w-52 rounded-xl p-1 flex flex-col text-center text-white m-1 bg-[#1f1d29]'>
            {(()=>{
                if(props.isSvg == true)
                    return <props.img className='w-24 h-28 self-center hover:scale-110 duration-100'/>
                else
                    return <img className='w-28 h-28 self-center hover:scale-110 duration-100' src={props.img}/>
            })()}
            
            <h2 className='text-2xl font-medium '>{props.title}</h2>
            <h2>{props.description}</h2>
        </a>
    )
}

export const Lang = (props) => {
    return (
        <Link href={"/projects/"+props.name}>
            <div className='hover:bg-slate-800 rounded-r-xl p-5 text-white font-medium grid grid-cols-2 items-center'>
                
                <p>{props.showName?props.showName:props.name}</p>
                <div className='grid place-items-end'>
                {props.img}
                </div>
                
            </div>
        </Link>
    )
}
