'use client'
import Link from 'next/link'
import React , {useState, useEffect} from 'react'


function Product() {
    
    let [productData, setProductData] = useState([])
    let [numberCart, setNumberCart] = useState(0)
    
    useEffect(() => {
        // get product data from localStorage
      let get_product_data_from_localStorage = JSON.parse(localStorage.getItem('dataProduct'))
      setProductData([...get_product_data_from_localStorage])

      setNumberCart(JSON.parse(localStorage.getItem('numberCart')))

    },[])

    let addCart = () => {
        localStorage.setItem('numberCart', JSON.stringify(numberCart += 1))
        
    }

return (
    
    <div className='flex items-center gap-4 w-full py-[50px] px-[3%]'>{
        
            productData.map((data, index) => (
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
                    <div className='flex items-center justify-between '>
                        <div onClick={addCart}>
                            <Link href='#'>Add Cart</Link>
                        </div>
                        <div>
                            <Link href='#'>Show Product</Link>
                        </div>
                    </div>
                </div>
                ))
        }</div>
    
)
}

export default Product;
