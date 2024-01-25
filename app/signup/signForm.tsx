'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// import axios from "axios"
// import { register } from 'module'

type Props = {}

const SignForm = (props: Props) => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    let [colorBorder, setColorBorder] = useState(true)



    const router  = useRouter()

    const Register = () => {
        const data = {
            name: user.name,
            email: user.email,
            password:user.password
        }

        if(data.name && data.email && data.password !== '' && data.name.length !>= 5 && data.email.includes('@gmail.com') && data.password.length !>= 8) {
          localStorage.setItem('data', JSON.stringify(data)) 
        }
        else setColorBorder(false)
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>

      {/* form */}
        <div className='p-10 rounded-lg shadow-lg flex flex-col'>
            <h1 className='text-xl font-medium mb-4'>Sign Up</h1>

            {/* input name */}
            <label htmlFor="" className='mb-2'>Name</label>
            <input  type="text" id='name' value={user.name} placeholder='name' onChange={(e) => setUser({...user, name: e.target.value})}
              className={`${colorBorder !== true && user.name.length < 5 ? 'border-red-600': ' border-gray-300 ' }  p-2 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:bg-slate-50 text-black `}
            />

            {/* input emile */}
            <label htmlFor="" className='mb-2'>Email</label>
            <input  type="text" id='email' value={user.email} placeholder='email' onChange={(e) => setUser({...user, email: e.target.value})}
              className={` ${colorBorder !== true && !user.email.includes('@gmail.com')  ?'border-red-600' : ' border-gray-300' } p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:bg-slate-50 text-black`}
            />

            {/*input password  */}
            <label htmlFor="" className='mb-2'>Password</label>
            <input  type="password" id='password' value={user.password} placeholder='password' onChange={(e) => setUser({...user, password: e.target.value})}
              className= {` ${colorBorder !== true && user.password.length < 8 ?'border-red-600' : ' border-gray-300' }  p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:bg-slate-50 text-black`}
            />
            <button onClick={Register} className='p-2 border bg-purple-700 text-white border-gray-300 rounded-lg mt-2 mb-4 focus:outline-none hover:bg-purple-600'>
                Register Now
            </button>
            <Link href='/signin' className='text-sm text-center mt-5 text-neutral-600'>Already have an Account?</Link>
            <Link href='/' className='text-center mt-2 text-gray-600'>Home</Link>
        </div>
    </div>
  )
}

export default SignForm