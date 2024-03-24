import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='bg-black flex justify-center items-center flex-col'>

        <div className='text-center'>
         <h2 className='text-white text-center m-auto my-2'>You Intersting Movie is Here <i className="fa-solid fa-face-smile text-yellow-500 "></i></h2>
        </div>

        <div className='text-white mb-2 flex justify-center items-center  '>
        <Link href={'https://www.facebook.com/ammar.motaz.94'}><i  className="fa-brands fa-facebook-f mr-2 border p-2 rounded-full hover:text-blue-400 transition-all duration-200"></i>
</Link>
        <i className="fa-brands fa-twitter mr-2 p-2 border rounded-full hover:text-blue-400 transition-all duration-200"></i>
        <i className="fa-brands fa-linkedin-in mr-2 p-2 border rounded-full hover:text-blue-400 transition-all duration-200"></i> 

        </div>

      </div>
    </>
  )
}
