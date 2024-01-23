'use client'
import { useState } from "react"
import SearchBar from "./SearchBar"
import Link from "next/link"
import { CiShoppingCart } from "react-icons/ci"
import { IoMdList } from "react-icons/io";
import Image from "next/image"
import img from '@/app/favicon.ico'


type Props = {}

function Navbar(props: Props) {

    const [showProfile, setShowProfile] = useState(false)
    const [ShowNav, setShowNav] = useState(false)

  return (
    
        <div className="flex items-center justify-between p-5 shadow pl-[8%] pr-[8%] ">

            {/* links */}
            <div className="flex items-center lg:space-x-10 space-x-7 ">
                <div className="font-semibold text-2xl  w-[30%]"> <a href="/">SEINE</a></div>
                <nav className="max-md:hidden  w-80">
                    <ul className="flex items-center lg:space-x-10 space-x-7 text-[15px]">
                        <li><a href="/" className="py-3 inline-block w-full">Shop</a></li>
                        <li><a href="filters" className="py-3 inline-block w-full">Filters</a></li>
                        <li><a href="myproducts" className="py-3 inline-block w-full">my Prodaucts</a></li>
                    </ul>
                </nav>
            </div>

            <div className="flex item-center gap-7  justify-between ">
                {/* input search */}
                <div className="felx items-center justify-between">
                    <SearchBar />
                    
                </div>

                {/* profile */}
                <div className='relative cursor-pointer min-w-12'>
                    {/* show profile */}
                    <Image  onClick={() => setShowProfile(!showProfile)} src={img} className='w-[35px] h-[35px] rounded-full object-cover' alt="" />
                    <div className={`absolute bg-white z-[2] rounded-lg pl-4 pr-4 pt-2 pb-2 shadow ml-[-18px] mt-1 ${showProfile ? '' : 'hidden'} `}>
                        {/* <SignOut/> */}
                        <Link href='/sign'>SignIn</Link>
                    </div>
                </div>

                {/* cart page */}
                <Link href='/cart'><div className='p-2 bg-gray-100 rounded-full'><CiShoppingCart size={20} /></div></Link>
                {/* show nav in media screen */}
                <IoMdList onClick={() => setShowNav(!ShowNav)} size={25} className='opacity-60 cursor-pointer md:hidden'/>
            </div>
                <div className={`${ShowNav ? 'w-0' : 'w-72'} h-[89.5vh] bg-emerald-400 absolute right-0 top-[75px] md:hidden transition-all ease-in-out delay-150 overflow-hidden`}>
                <span>lm,;</span>
                </div>
        </div>
    
  )
}

export default Navbar

