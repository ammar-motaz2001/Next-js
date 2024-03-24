
import Link from 'next/link'
import React from 'react'

export default async function page(props:any) {
    console.log(props.params.id)

    let response:any=await fetch(`https://api.themoviedb.org/3/movie/${props.params.id}?api_key=7e2e58ffcb7347489a7974526d3318b9`)
    let data:any=await response.json()
    const result = data.genres.map((item:number|string, index:number) => {
      return console.log(data);
  });
  return (
    <>
     <div className='flex flex-col m-5 md:flex-row xl:flex-row lg:flex-row'>
        <div >
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className='w-80 md:w-96 xl:w-96 lg:w-96' alt="" />
        </div>
        <div className='ml-5'>
            <h1 className=' text-black  dark:text-white '>{data.title}</h1>
            <p className=' text-black  dark:text-white'>{data.release_date} (<span>{(data.original_language.toUpperCase())}</span>) <span className='text-white'>.</span> {data.genres.map((item:number|string, index:number) => {
      return <span className='pl-2 text-black  dark:text-white'>{data.genres[index].name}</span>
        })}</p>
            <h2 className='pt-4 text-black  dark:text-white'>Overview</h2>
            <p className=' mb-3 text-black dark:text-white'>{data.overview}</p>
            <Link href={data.homepage}  className='bg-red-600 rounded-md text-white py-1 px-12'>See More</Link>

            </div>

           
           
        </div> 
    </>
  )
            
}

