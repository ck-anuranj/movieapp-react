import React, { useEffect, useState } from 'react'
import axios from "axios";
import Pagination from './Pagination';
import { Oval } from 'react-loader-spinner';
function Movies() {

  let [movies, setMovies] = useState([]);
  let [pageNum, setPage]=useState(1);
  let [hovered, setHovered]=useState("");
  let[favourites, setFavourites] = useState([]);

  const onPrev = ()=>{
    if(pageNum > 1){
      setPage(pageNum - 1);
      }
   }
  const onNext = ()=>{
      setPage(pageNum + 1);
    } 
 /*  pagination ends here */
/*  showemoji */
const showEmoji=(id)=>{
  setHovered(id);
 }
const hideEmoji=()=>{
  setHovered("");
 }

/* making api request */
  useEffect(function(){
    console.log("useEffect again");
    (function(){
      axios
      .get("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page="+pageNum)
      .then((res)=>{
        /* console.table(res.data.results); */
        setMovies(res.data.results);
             })
     })()  
  },[pageNum])
 /*  Emoji show and hide on hover */
 /*  const showEmoji = (id) =>{
    setHovered(id);
  }
  const hideEmoji = (id) =>{
    setHovered("");
  } */

   /*  adding,removing emojis to fav */
   const addEmoji = (id) => {
   const newFav = [...favourites, id];
    setFavourites(newFav);
   }
   const removeEmoji = (id) => {
    const filteredFav = favourites.filter(elem => {
      return elem != id;
    })
    setFavourites(filteredFav);


   }
  return ( 
<div className='mt-8'>
     <div className='mb-8 font-bold text-2xl text-center '>Trending Movies  
     </div>

  <div className='flex flex-wrap justify-center'> 

   {
      movies.length == "" ?  <Oval
      height="80"
      width="80"
      radius="5"
      color="green"
      ariaLabel="loading"   
    />: 
      movies.map((movie)=>{
        console.log(movie)
        return <div
        onMouseOver={
          ()=>{showEmoji(movie.id)}
        }
        onMouseLeave={
          ()=>{hideEmoji(movie.id)}
        }
        
        
        key={movie.id}
        
        className='bg-center bg-cover w-[160px] h-[30vh] 
        md:h-[40vh] md:w-[180px] m-4 rounded-xl
         hover:scale-110 duration-300 flex items-end relative'

            style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}

        >
          <div className='p-2 bg-gray-800 absolute top-2 right-2 rounded-xl'
          style={{display:hovered==movie.id?
            "block":"none"
          }}
          >
           {
            favourites.includes(movie.id)==false?
                <div className='' onClick={()=>{addEmoji(movie.id)}}>
                  ❤️</div>:
                <div className='' onClick={()=>{removeEmoji(movie.id)}}>❌</div>
           }
            
            </div>
          
            <div className='font-bol text-white bg-gray-900 bg-opacity-60 p-2 text-center w-full rounded-b-xl'>{movie.title||movie.name}</div>

        </div>
      })
    }
  
    </div>
    <Pagination
    pageNum={pageNum}
    onPrev={onPrev}
    onNext={onNext}
    ></Pagination>
    </div>
  )
}

export default Movies
