'use client'
// import React, {useCallback} from 'react'
// import {useDropzone} from 'react-dropzone'

// export default function MyDropzone() {
//   const onDrop = useCallback((acceptedFiles) => {
//     acceptedFiles.forEach((file) => {
//       const reader = new FileReader()

//       reader.onabort = () => console.log('file reading was aborted')
//       reader.onerror = () => console.log('file reading has failed')
//       reader.onload = () => {
//       // Do whatever you want with the file contents
//         const binaryStr = reader.result
//         console.log(binaryStr)
//       }
//       reader.readAsArrayBuffer(file)
//     })
    
//   }, [])
//   const {getRootProps, getInputProps} = useDropzone({onDrop})
//   console.log(getRootProps);                                  

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       <p>Drag n drop some files here, or click to select files</p>
//     </div>
//   )
// }
import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

export default function MyDropzone() {
  const [selectedImages, setSelectedImages] = useState([]);

  // Load selected images from local storage on component mount
  useEffect(() => {
    const storedImages = localStorage.getItem('selectedImages');
    if (storedImages) {
      setSelectedImages(JSON.parse(storedImages));
    }
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => URL.createObjectURL(file));

    // Update state and save to local storage
    setSelectedImages((prevImages) => {
      const updatedImages = [...prevImages, ...newImages];
      localStorage.setItem('selectedImages', JSON.stringify(updatedImages));
      return updatedImages;
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>

      {selectedImages.length > 0 && (
        <div>
          <p>Selected Images:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedImages.map((image, index) => (
              <img key={index} src={image} alt={`Selected ${index + 1}`} style={{ maxWidth: '0%', margin: '8px' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
