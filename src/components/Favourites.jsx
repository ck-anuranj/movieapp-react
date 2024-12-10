import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
/* import { Action } from '@remix-run/router' */

let genreids={
  28: 'Action',
  12: 'Adventure', 
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648:'Mystery',
  10749: 'Romance',
  878: 'Sci-Fi',
  10770: 'TV',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
}

let sampleMovies=[
  {
    "adult": false,
"backdrop_path": "/rWs3Q9bT7zCH6t004z67UGuWUwu.jpg",
"genre_ids": 
[
16,
35,
10751,
14
],
"id": 645757,
"media_type": "movie",
"original_language": "en",
"original_title": "That Christmas",
"overview": "It's an unforgettable Christmas for the townsfolk of Wellington-on-Sea when the worst snowstorm in history alters everyone's plans — including Santa's.",
"popularity": 87.623,
"poster_path": "/bX6dx2U4hOk1esI7mYwtD3cEKdC.jpg",
"release_date": "2024-11-27",
"title": "That Christmas",
"video": false,
"vote_average": 7.875,
"vote_count": 8,
  },
  {
    "adult": false,
  "backdrop_path": "/bGcMuFVzW0LitMJWSzp4EjmzQ0b.jpg",
  "first_air_date": "2024-12-04",
  "genre_ids": [
    9648,
    18
  ],

  "id": 226529,
  "media_type": "tv",
  "name": "Light Shop",
  "origin_country": ['KR'],
  "original_language": "ko",
  "original_name": "조명가게",
  "overview": "In a mysterious shop that sells lamps, the dead may return to the world of the living, while the living may not walk out alive.",
  "popularity": 80.571,
  "poster_path": "/ykchqPqmXp2Vk2s7JMyevQGfcVM.jpg",
  "vote_average": 8.6,
  "vote_count": 5
},
{
  "adult": false,
  "backdrop_path": "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
  "id": 619930,
  "title": "Narvik",
  "original_language": "no",
  "original_title": "Kampen om Narvik",
  "overview": "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
  "poster_path": "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
  "media_type": "movie",
  "genre_ids": [
    10752,
    18,
    36,
    28
  ],
  "popularity": 321.063,
  "release_date": "2022-12-25",
  "video": true,
  "vote_average": 7.406,
  "vote_count": 53
},
{
  "adult": false,
  "backdrop_path": "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
  "id": 804095,
  "title": "The Fabelmans",
  "original_language": "en",
  "original_title": "The Fabelmans",
  "overview": "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
  "poster_path": "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
  "media_type": "movie",
  "genre_ids": [
    18
  ],
  "popularity": 163.3,
  "release_date": "2022-11-11",
  "video": false,
  "vote_average": 8.02,
  "vote_count": 561
},
{
  "adult": false,
  "backdrop_path": "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
  "id": 1035806,
  "title": "Detective Knight: Independence",
  "original_language": "en",
  "original_title": "Detective Knight: Independence",
  "overview": "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
  "poster_path": "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
  "media_type": "movie",
  "genre_ids": [
    28,
    53,
    80
  ],
  "popularity": 119.407,
  "release_date": "2023-01-20",
  "video": false,
  "vote_average": 6.6,
  "vote_count": 10
},
{
  "adult": false,
  "backdrop_path": "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
  "id": 555604,
  "title": "Guillermo del Toro's Pinocchio",
  "original_language": "en",
  "original_title": "Guillermo del Toro's Pinocchio",
  "overview": "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
  "poster_path": "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
  "media_type": "movie",
  "genre_ids": [
    16,
    14,
    18
  ],
  "popularity": 754.642,
  "release_date": "2022-11-18",
  "video": false,
  "vote_average": 8.354,
  "vote_count": 1694
}

]

function Favourites() {
  let [genres, setGenres] = useState([]);
  let [movies, setMovies] = useState(sampleMovies);
  let [searchItem, setSearchItem] = useState("");
  let [curGenre, setCurrentgenre]=useState("All Genres");
  let [curRatingOrder, setCurRatingOrder]=useState(0);
  let [curPopularityOrder, setPopularityOrder]=useState(0);
  let [noOfElems, setNoOfElems]=useState(3);
  let [curPage, setCurPage]=useState(1);


 /*  delete movies */
 const deleteMovie = (id)=>{
  const restofTheMovies = movies.filter((movie)=>{
    return movie.id!=id;
  })
  setMovies(restofTheMovies);
}


  useEffect(() => {
    let temp = movies.map((movie) => genreids[movie.genre_ids[0]])
    temp = new Set(temp);
    setGenres(["All Genres", ...temp]);
  }, [])

    //filter
  const onCurGenre=(genre)=>{
    setCurrentgenre(genre);
  }
  
   /* Search 
   map a searched movies */
   let searchedMovies = searchItem == "" ? movies: movies.filter((movie) => {
    let movieName= movie.title || movie.name;
    let lowerCharSearch = searchItem.toLowerCase();
   return movieName.toLowerCase().includes(lowerCharSearch);
  });

  //filter  
  let filteredMovies = curGenre=="All Genres"? searchedMovies : searchedMovies.filter((searchedMovie)=>{
    return genreids[searchedMovie.genre_ids[0]]==curGenre;
  })


  //sorting : rating
if (curRatingOrder != 0){

        if (curRatingOrder == 1) {
          filteredMovies= filteredMovies.sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average;
          })
          }

          else if(curRatingOrder==-1){
            filteredMovies= filteredMovies.sort((movieA, movieB) =>{
              return movieB.vote_average - movieA.vote_average;
            })
          }
  }
//sorting : popularity
if (curPopularityOrder != 0){

  if (curPopularityOrder == 1) {
    filteredMovies= filteredMovies.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    })
    }

    else if(curPopularityOrder==-1){
      filteredMovies= filteredMovies.sort((movieA, movieB) =>{
        return movieB.popularity - movieA.popularity;
      })
    }
}

//Pagination
let si=(noOfElems) * (Number(curPage)-1);
let ei=Number(noOfElems) + Number(si);
/* console.log(si,ei); */
let maxPageNum = Math.ceil(filteredMovies.length/noOfElems);
filteredMovies = filteredMovies.slice(si,ei);


const onPrev=(pageNum)=>{
  if(pageNum>0){
    setCurPage(pageNum);
  }
}

const onNext=(pageNum)=>{
  if(pageNum <= maxPageNum){
    setCurPage(pageNum);
  }
}


  return (
   <>
         {/*  Genres */}
  <div className='mt-6 flex space-x-2 justify-center'>
                {genres.map((genre =>{
                    return(

                      <button className={genre == curGenre ? 'py-1 px-2 rounded-lg font-bold text-white bg-blue-400' :
                        'py-1 px-2 bg-gray-400 rounded-lg font-bold text-white hover:bg-blue-400'
                      }
                      onClick={ () => {onCurGenre(genre) }}
                      >
                      {genre}
                      </button>
                    )
                  }))}        
  </div> 


           {/* Searching */}
  <div className='mt-4 flex justify-center space-x-2'> 
            <input type="text" placeholder='search'
               className='border-2 py-1 px-2 text-center'
               value={searchItem}
               onChange={(e)=>{setSearchItem(e.target.value)}} />
                        
            <input type="number"
               className='border-2 py-1 px-2 text-center' /* value={1} */
               value={noOfElems} 
               onChange={(e)=>{
                setNoOfElems(e.target.value)

               }}
               />
  </div> 
       
       
        {/* dashboard Table */}
       
  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">NAME</th>

                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                     <div className='flex space-x-2'> <div>RATING</div>
                              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" alt="icon"
                              onClick={()=>{setCurRatingOrder(1)}}
                              />
                              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" alt="icon"
                              onClick={()=>{setCurRatingOrder(-1)}} />
                     </div>
                     </th>

                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        <div className='flex space-x-2'> <div>POPULARITY</div>
                              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" alt="icon" 
                              onClick={()=>{setPopularityOrder(1)}}/>
                              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" alt="icon" 
                              onClick={()=>{setPopularityOrder(-1)}}/>
                     </div></th>

                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">GENRE</th>
                    
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">REMOVE</th>
                  </tr>
                </thead>


                <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                  {filteredMovies.map((movie) =>{
                   /*  {console.log(movie)}; */

                        return <tr class="hover:bg-gray-50" key={movie.id}>
                         <th className="flex items-center align px-6 py-4 font-normal text-gray-900 space-x-2">
                          
                             <img
                               className="h-[6rem] w-[10rem] object-fit"
                               src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                               alt=""
                             />
                            
                           
                           
                             <div className="font-medium text-gray-700 text-sm">{movie.title||movie.name}</div>
                           
                         </th>
                         <td className="px-6 py-4 pl-12">
                      {movie.vote_average.toFixed(1)}
                         </td>
                         <td className="px-6 pl-12 py-4">{movie.popularity.toFixed(2)}</td>
                         <td className="px-6  py-4">
                           <div className="flex gap-2">
                             <span
                               className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                             >
                             {genreids[movie.genre_ids[0]]}
                             </span>
                            
     
                           </div>
                         </td>
     
     
                         <td class="px-6 py-4">
                             <span className='inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-semibold text-red-600 cursor-pointer'
                             onClick={()=>{
                              deleteMovie(movie.id)
                             }}
                             >
                                   Delete
                           </span>
                         </td>
                       </tr>
                  })}         
       </tbody>
       </table>
    </div>

     
  <Pagination pageNum={curPage} onPrev={onPrev} onNext={onNext} ></Pagination>
   </>
  )
}
export default Favourites
