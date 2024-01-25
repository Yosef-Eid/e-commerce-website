'use client'
import { useState } from "react"
import SearchBar from "./SearchBar"
import Link from "next/link"
import { CiShoppingCart } from "react-icons/ci"
import { PiListLight } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";
import { LiaProductHunt } from "react-icons/lia";
import { IoPersonSharp } from "react-icons/io5";
import { PiSignOutBold  } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import Image from "next/image"
import img from '@/app/favicon.ico'


type Props = {}

function Navbar(props: Props) {

    const [showProfile, setShowProfile] = useState(false)
    const [showSignProfile, setShowSignProfile] = useState(false)
    const [ShowNav, setShowNav] = useState(false)
    const [userName, setUserName] = useState('')

    let data = localStorage.getItem('data')
    
    
    let ShowProfile = () => {
        setShowProfile(!showProfile)

        if(data){
            setShowSignProfile(true)
            setShowProfile(showProfile)
    
            setUserName(JSON.parse(data).name)
            if(showSignProfile == true){
                setShowSignProfile(false)
                
                
            
            }else  setShowSignProfile(true)
        }
        else{
        setShowProfile(!showProfile)
        setShowSignProfile(false)
        }

        
    }


  return (
    
        <div className="flex items-center justify-between p-5 shadow pl-[8%] pr-[8%]  ">

            {/* links */}
            <div className="flex items-center lg:space-x-10 space-x-7  ">
                <div className="font-semibold text-2xl  w-[30%]"> <a href="/">SEINE</a></div>
                <nav className="max-[950px]:hidden w-80">
                    <ul className="flex items-center lg:space-x-10 space-x-7 text-[15px]">
                        <li><a href="/" className="py-3 inline-block w-full">Shop</a></li>
                        <li><a href="filters" className="py-3 inline-block w-full">Filters</a></li>
                        <li><a href="myproducts" className="py-3 inline-block w-full">my Products</a></li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-7  justify-between ">
                {/* input search */}
                <div className="flex items-center justify-between">
                    <SearchBar />
                </div>

                {/* profile */}
                <div className='relative cursor-pointer min-w-12 '>
                    {/* show profile */}
                    <Image  onClick={ShowProfile} src={img} className='w-[35px] h-[35px] rounded-full object-cover' alt="" />
                    <div className={`absolute bg-white z-[2] rounded-lg pl-4 pr-4 pt-2 pb-2 shadow ml-[-18px] mt-1 ${showProfile ? '' : 'hidden'} `}>
                        {/* <SignOut/> */}
                        <Link href='/signin'>SignIn</Link>
                    </div>

                    {/* after sign in */}
                    <div className={` ${showSignProfile == false ? 'h-0' : 'h-40'} flex items-start justify-center gap-3 flex-col w-[200px] top-[60px] right-[-70px] bg-[#58667312]  rounded-md absolute transition-all ease-in-out delay-75 overflow-hidden `} >
                        <Link href='/profile' className="flex gap-3 items-center pl-4 text-gray-800 hover:bg-slate-200 w-full py-1"> <IoPersonSharp className="opacity-[.8]"/><p>{userName}</p></Link>
                        <Link href="/addproduct" className="flex gap-3 items-center pl-4 text-gray-800 hover:bg-slate-200 w-full py-1"><MdAddCard /><p>Add Product</p></Link>
                        <p onClick={() => localStorage.removeItem("data")} className="flex gap-3 items-center pl-4 text-gray-800 hover:bg-slate-200 w-full py-1"> <PiSignOutBold className="opacity-[.8]"/>Sign Out</p>
                    </div>
                </div>

                {/* cart page */}
                <Link href='/cart'><div className='p-2 bg-gray-100 rounded-full'><CiShoppingCart size={20} /></div></Link>
                {/* show nav in media screen */}
                <PiListLight onClick={() => setShowNav(!ShowNav)} size={25} className='opacity-60 cursor-pointer min-[950px]:hidden '/>
            </div>

            {/* side bar */}
            <div className={`${ShowNav ? 'w-72' : 'w-0'} h-[89.5vh] pt-7 pl-4 bg-white shadow-2xl absolute right-0 top-[75px] transition-all ease-in-out delay-150 overflow-hidden min-[950px]:hidden`}>
                <nav>
                    <div className="flex flex-col items-start gap-3 w-[90%] ">
                        <p className=" flex items-center gap-5 justify-start pl-[15px] w-full hover:bg-slate-100 rounded-md"> <CiShoppingCart className="scale-[2]" /> <a href="/" className="py-2 inline-block w-full">Shop</a></p>
                        <p className=" flex items-center gap-5 justify-start pl-[15px] w-full hover:bg-slate-100 rounded-md"> <CiFilter className="scale-[2]"/> <a href="filters" className="py-2 inline-block w-full">Filters</a></p>
                        <p className=" flex items-center gap-5 justify-start pl-[15px] w-full hover:bg-slate-100 rounded-md"> <LiaProductHunt className="scale-[1.7] text-[#000000]"  /> <a href="myproducts" className="py-2 inline-block w-full">my Products</a></p>
                    </div>
                </nav>
            </div>
        </div>
    
    )
}

export default Navbar

