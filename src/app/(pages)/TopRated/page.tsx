import Link from 'next/link'
import React from 'react'

export default async function page() {

  let response=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7e2e58ffcb7347489a7974526d3318b9")
  let data:any= await response.json()
  console.log(data.results)

  
  return (
    <>
      <div className='grid grid-cols-2 cursor-pointer gap-3 mt-4 mb-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 '>
         {data.results.map((item:number|string,index:number) =>{

return <div key={index}>

<Link href={`../moveDetails/${data.results[index].id}`}>
<div className='border p-4 border-black'>
    
<img src={`https://image.tmdb.org/t/p/w500${data.results[index].poster_path}`} className='w-80' alt="" />
<p className='text-white text-center'>{data.results[index].original_title}</p>

<div className='flex justify-between'>
    <div className='text-yellow-400'>
        {data.results[index].vote_average}
    </div>
    <div>
    <p className='text-yellow-500'><i className="fa-solid fa-star"></i></p>
    </div>
</div>
</div>
</Link>
</div>
                
                
                
                
        })}



         </div>
    </>
  )
}
