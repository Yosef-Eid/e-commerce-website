// 'use client'
// import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar.tsx';
import ProductForm from './productForm.js'

function AddProduct() {

    // let [value, setValue] = useState('')
    // let [arr, setArr] = useState([])

    // useEffect(() => {
    //     let getData = JSON.parse(localStorage.getItem('userName')) || [];
    //     setArr(getData);
    // },[])

    // let addLocale = () => {

    //     if(value.trim() !== ''){
    //         let obj = {name:value,}
    //         setArr((value) => [...value, obj])
    //         localStorage.setItem('userName', JSON.stringify([...arr, obj]))
    //         setValue('')
    //     }
    // }

return (
    <div className=' w-ful'>
        <Navbar />
        <ProductForm />
        
    </div>
  )
}

export default AddProduct;
