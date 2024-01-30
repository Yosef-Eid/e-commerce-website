'use client'
import React, { useContext } from 'react'
import Navbar from '../components/Navbar'

let cont = useContext(contx)


const Page = () => {
return (
    <div>
        <Navbar />
        {cont}
    </div>
)
}

export default Page
