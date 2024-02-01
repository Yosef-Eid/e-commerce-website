'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Product() {
  let [productData, setProductData] = useState([]);
  let [numberCart, setNumberCart] = useState(0);
  let [cartStorage, setCartStorage] = useState([]);

  useEffect(() => {
    // get product data from localStorage
    let get_product_data_from_localStorage = JSON.parse(localStorage.getItem('dataProduct'));
    if (get_product_data_from_localStorage) {
      setProductData([...get_product_data_from_localStorage]);
      setNumberCart(JSON.parse(localStorage.getItem('numberCart')));
    }

    let cartProduct = JSON.parse(localStorage.getItem('cart'));
    setCartStorage(cartProduct);
  }, []);

  if (typeof window !== 'undefined' && !localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  
  let addCart = (e) => {
    if (localStorage.getItem('cart')) {
      localStorage.setItem('numberCart', JSON.stringify(numberCart + 1));
      let getTitleProduct =
        e.target.parentElement.parentElement.parentElement.children[1]
          .innerHTML;
      let getProductFromStorage = JSON.parse(
        localStorage.getItem('dataProduct')
      );
      let indexProduct = getProductFromStorage.findIndex(
        (item) => item.title === getTitleProduct
      );

      setCartStorage((items) => [...items, getProductFromStorage[indexProduct]]);
      localStorage.setItem(
        'cart',
        JSON.stringify([...cartStorage, getProductFromStorage[indexProduct]])
      );
    } else localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <div className='flex items-center gap-4 w-full py-[50px] px-[3%]'>
      {productData.map((data, index) => (
        <div
          key={index}
          className='w-[200px] shadow-slate-700 shadow-md rounded-md border-gray-500 hover:scale-105 transition-all delay-75 '
        >
          <div className='flex overflow-auto'>
            {data.img.map((image, imgIndex) => (
              <Image
                key={imgIndex}
                src={image}
                alt=''
                width={200}
                height={100}
                style={{ minWidth: '200px' }}
                className='border-[2px] border-gray-950'
              />
            ))}
          </div>
          <div>{data.title}</div>
          <div>{data.category}</div>
          <div>{data.style}</div>
          <div>{data.store}</div>
          <div className='flex items-center gap-2'>
            {data.size.map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </div>
          <div>{data.number}</div>
          <div>{data.price}</div>
          <div className='flex items-center gap-2'>
            {data.color.map((e, i) => (
              <div
                key={i}
                style={{
                  background: e,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                }}
              ></div>
            ))}
          </div>
          <div>{data.description}</div>
          <div className='flex items-center justify-between '>
            <div onClick={addCart}>
              <Link href='#' className='w-30 py-1 bg-green-600'>
                Add Cart
              </Link>
            </div>
            <div>
              <Link href='#'>Show Product</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
