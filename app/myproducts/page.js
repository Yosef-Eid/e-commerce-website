'use client'
import { createContext } from 'vm'
import Navbar from '../components/Navbar'
import Product from './product.js'

  


const Page = () => {
  return (
    <div>
        <Navbar />
        <Product />
      
    </div>
  )
}

export default Page;
