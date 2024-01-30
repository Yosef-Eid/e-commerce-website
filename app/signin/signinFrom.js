'use client'
import React, {useState} from 'react'
import Link from 'next/link'

function SignFrom() {

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    let [colorBorder, setColorBorder] = useState(true)
    let [signin, setSignin] = useState(false)
    
    let getData = localStorage.getItem('data');
    let email = '';
    let password = ''; 
      if(getData){
        email = JSON.parse(getData).email
        password = JSON.parse(getData).password
      }
    let check = () => {
      
      if(user.email !== email)  setColorBorder(false);
      else if(user.password !== password) setColorBorder(false);

      if(email == user.email && password == user.password){
        setSignin(true)
      }
      
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>

      {/* form */}
        <div className='p-10 rounded-lg shadow-lg flex flex-col'>
            <h1 className='text-xl font-medium mb-4'>Sign In</h1>

            {/* input emile */}
            <label htmlFor="" className='mb-2'>Email</label>
            <input  type="text" id='email' value={user.email} placeholder='email' onChange={(e) => setUser({...user, email: e.target.value})}
              className={` ${colorBorder !== true ? 'border-red-500' : ''} p-2  border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black`}
            />

            {/*input password  */}
            <label htmlFor="" className='mb-2'>Password</label>
            <input  type="password" id='password' value={user.password} placeholder='password' onChange={(e) => setUser({...user, password: e.target.value})}
              className={` ${colorBorder !== true ? 'border-red-500' : ''} p-2 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black`}
            />
            <Link href={signin == true ? '/' : ''} onClick={check}
              className='p-2 border text-center bg-purple-600 text-white border-gray-300 rounded-lg mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                Register Now
            </Link>
            <Link href='/signup' className='text-sm text-center mt-5 text-neutral-600'>Do not have an Account?</Link>
            <Link href='/' className='text-center mt-2 text-gray-600' >Home</Link>
        </div>
    </div>
  )
}

export default SignFrom;
