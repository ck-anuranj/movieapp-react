import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
/* import bat1 from "../bat1.jpg"
import "./Banner.css" */

function Banner() {
  let [bannerMovie, setBanner] = useState("");

 

  useEffect(function(){
    (function(){
      axios
      .get("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=3")
      .then((res)=>{
        console.table(res.data.results);
        setBanner(res.data.results[0]);
        })

     })()
    
  },[])

  return ( 
    <> 
    {
    bannerMovie == ""  ? <Oval
    height="80"
  width="80"
  radius="9"
  color="gray"
  secondaryColor='gray'
  ariaLabel="loading"
  wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
  />
 :

  
    <div className={'h-[40vh] md:h-[60vh] lg:h-[80vh] bg-center bg-cover flex items-end'}
    
    style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path})`}}
    >
         
      
    <div className='text-xl text-white bg-gray-900 p-8 bg-opacity-60 text-center w-full'>{bannerMovie.title||bannerMovie.name}</div>

    </div>
    
}
    </>

   
  )
}

export default Banner;
