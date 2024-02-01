'use client'
import { channel } from 'process';
import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react'
import ColorPicker,  { themes }  from 'react-pick-color';
import { useDropzone } from 'react-dropzone';

function ProductForm() {

    let [openColor, setOpenColor] = useState(false)

    let [title, setTitle ] = useState('')
    let [category, setCategory ] = useState('')
    let [style, setStyle ] = useState('')
    let [store, setStore ] = useState('')
    let [size, setSize] = useState([])
    let [number, setNumber] = useState(''); number < 0 ? setNumber('') : '' 
    let [price, setPrice] = useState('');   price < 0 ? setPrice('') : '' 
    let [color, setColor] = useState([])
    let [selectedColor, setSelectedColor] = useState('') 
    let [selectedImages, setSelectedImages] = useState([]);
    let [description, setDescription] = useState('')

    let [dataSaveStorage, aetDataSaveStorage ] = useState([])

    // sizes array
    let sizeProduct = ['sm', 'md', 'xl', '2xl', '3xl', '4xl']

    // Add or remove size on click
    const addToSize = (Size) => {
        if (size.includes(Size)) setSize(size.filter((selectedSize) => selectedSize !== Size));
        else setSize([...size, Size]);
    }

    // add color to input color
    const addColor = () => {
        color.includes(selectedColor) ? '' : setColor([...color, selectedColor]);
        // setSelectedColor('');
        setOpenColor(false)
    };

    // remove color 
    const removeColor = (e) => {
        let getColor = e.target.parentElement.children[0].innerHTML
        color.includes(getColor) ? setColor(color.filter((x) => x !== getColor)) : ''
    }

    // get data product from local storage
    useEffect(() => {
        aetDataSaveStorage(JSON.parse(localStorage.getItem('dataProduct')) || []) 

    },[])

    const onDrop = useCallback((acceptedFiles) => {
        const newImages = acceptedFiles.map((file) => URL.createObjectURL(file));

        // Update state and save to local storage
        setSelectedImages((prevImages) => {
            const updatedImages = [...prevImages, ...newImages];
            return updatedImages;
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


    // add data product to local storage
    const addLocale = () => {
        if(title.trim() !== '' && category.trim() !== '' && style.trim() !== '' && store.trim() !== '' && size.value !== '' && number.trim() !== '' && price.trim() !== '' ){
            let obj = {
                title:title,
                category:category,
                style:style,
                store:store,
                size:size,
                number:number,
                price:price,
                color:color,
                img:selectedImages,
                description:description
            }

            aetDataSaveStorage((data) => [...data, obj])
            localStorage.setItem('dataProduct', JSON.stringify([...dataSaveStorage, obj]))
            setTitle(''); setCategory(''); setStyle(''); setStore(''); setSize(''); setNumber(''); setPrice(''); setColor('')
            window.location.reload()
        }
    } 

return (
    
        <div className='w-full flex items-center flex-col justify-center mt-14'>
            <h1 className='font-bold text-[25px] w-full pl-[10%] text-gray-900 text-start mb-14'>Add your Product n SEINE</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-7 w-[80%]'>
                {/* input title */}
                <div>
                    <label htmlFor="title" className='text-[19px]'>Title</label>
                    <input type="text" name='title' value={title} id='title' placeholder='Title' onChange={(e) => setTitle(e.target.value)} className=' mt-1 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>

                
                {/* input category */}
                <div>
                    <label htmlFor="category" className='text-[19x] '>Category</label>
                    <input type="text" name='category' value={category} id='category' placeholder='category' onChange={(e) => setCategory(e.target.value)} className='mt-1 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>

                {/* input style  */}
                <div>
                    <label htmlFor="style" className='text-[19x] '>Style</label>
                    <input type="text" name='style' value={style} id='style' placeholder='Style' onChange={(e) => setStyle(e.target.value)} className='mt-1 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>

                {/* input store */}
                <div>
                    <label htmlFor="store" className='text-[19x] '>Store</label>
                    <input type="tex" name='store' value={store} id='store' placeholder='store' onChange={(e) => setStore(e.target.value)} className='mt-1 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>

                {/* input size  */}
                <div>
                    <label htmlFor="size" className='text-[19x] '>Size</label>
                    <input type="text" name='size' value={size} readOnly id='size' placeholder='size'  onChange={(e) => setSize(e.target.value)} className='mt-1 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                    <div className='flex items-center justify-between w-full gap-[2%] mt-3' >
                        {sizeProduct.map((addSize) => (
                            <p key={addSize} onClick={() => addToSize(addSize)}  className={` ${size.includes(addSize) ? 'bg-purple-500 text-white' : ''} px-3 border-[.5px] border-purple-400 rounded-md cursor-pointer hover:border-purple-800`}>{...addSize}</p>
                        ))}
                    </div>
                </div>

                {/* input number */}
                <div>
                    <label htmlFor="number" className='text-[19x] '>Number</label>
                    <input type="number" name='inventory' value={number} id='number' placeholder='inventory' onChange={(e) => setNumber(e.target.value)} className='mt-1 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>

                {/* input price */}
                <div>
                    <label htmlFor="price" className='text-[19x] '>Price</label>
                    <input type="number" name='price' value={price} id='price' placeholder='price' onChange={(e) => setPrice(e.target.value)} className='mt-1 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>

                {/* input color */}
                <div>
                    <label htmlFor="color" className='text-[19x] '>Color</label>
                    <input type="text" name='color' value={color} id='color' placeholder='color' className='mt-1 mb-10 p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                    
                    {/* show color value */}
                    <div className='flex flex-wrap gap-3 items-center justify-between'>
                        <button onClick={() => setOpenColor(!openColor)} className='w-[50px] h-[50px] bg-purple-600 rounded-full text-white cursor-pointer text-[15px]' ></button>
                        {(openColor && <ColorPicker  color="plum" onChange={(color) => setSelectedColor(color.hex)}  className='z-50 relative'/>)}
                        <button onClick={addColor} className='min-w-[100px] py-1 bg-purple-600 rounded-md text-white cursor-pointer text-[15px]'>Add Color</button>
                    </div>

                    <div className='mt-[40px] flex flex-wrap  items-start flex-col gap-1'>{
                        color.map((color, index) => (
                            <div  key={index} className='flex items-center gap-3'>
                                <div  className=' w-[100px] h-8 rounded-md shadow-xl text-[13px] text-center text-blue-50 leading-8' style={{background:color }}>{color}</div>
                                <button onClick={removeColor} className='w-20 h-6 bg-gray-400 shadow-lg rounded-md text-[12px]'>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

                <div {...getRootProps()} data-te-ripple-color="light" data-te-ripple-init className="  mx-auto flex-grow grid-rows-2 w-[80%] py-3 text-[14px] bg-gray-600 text-center cursor-pointer active:bg-slate-500 inline-block rounded bg-primary  font-medium uppercase leading-normal text-white shadow-[0_4px_12px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    <input {...getInputProps()} />
                    <p>Upload product images... Or drag and drop</p> 
                </div>
            <div className='mx-auto flex-grow grid-rows-2 justify-items-start mt-7 w-[80%]'>
                {selectedImages.length > 0 && (
                    <div className=' mx-auto flex-grow grid-rows-2 justify-items-start w-[80%]'>
                    <p className='text-start w-full'>Product Images:</p>
                    <div className='flex items-cent
                    er justify-center flex-wrap gap-2  '>
                        {selectedImages.map((image, index) => (
                        <Image key={index} src={image} width={250} height={260} alt={`Selected ${index + 1}`} className='w-[200px] h-[260px] rounded-md' />
                        ))}
                    </div>
                    </div>
                )}
            </div>

            <div className='mx-auto flex-grow grid-rows-2 w-[80%] pt-28'>
                    <label htmlFor='description' className='text-[19x] font-bold pb-2'>Description about your product</label>
                    <textarea id='description' onChange={(e) => setDescription(e.target.value)} className='w-full min-h-[100px] max-h-[300px] border-[1.5px] rounded-lg px-3 py-1 focus:outline-none focus:border-purple-600 border-gray-500 overflow-auto'></textarea>
            </div>
            
            <button onClick={addLocale} className='w-[150px] bg-purple-'>click</button>
    </div>
)
}

export default ProductForm
