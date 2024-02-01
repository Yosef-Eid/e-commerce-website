'use client'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'



function Carts() {

    let [carts, setCarts] = useState([])

    useEffect(() =>{

        if(JSON.parse(localStorage.getItem('cart'))) setCarts(JSON.parse(localStorage.getItem('cart')))

    },[])

    


    return (
        <>
        {
            carts.map((data, index) => (
                <div key={index} className='w-[200px] shadow-slate-700 shadow-md rounded-md border-gray-500 hover:scale-105 transition-all delay-75 '>
                    <div>{data.title}</div>
                    <div>{data.category}</div>
                    <div>{data.style}</div>
                    <div>{data.store}</div>
                    <div className='flex items-center gap-2'>{data.size.map((e,i) => (<div key={i}>{e}</div>))}</div>
                    <div>{data.number}</div>
                    <div>{data.price}</div>
                    <div className='flex items-center gap-2'>{data.color.map((e,i) => (<div key={i} style={{background:e, width:'20px', height:'20px', borderRadius:'50%'}}></div>))}</div>
                    <div>{data.description}</div>
                </div>
                ))
        }
        </>
    )
}

export default Carts;
