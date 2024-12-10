import React, { useState } from 'react'


function Pagination(props) {
  let {pageNum, onNext, onPrev}=props;
  /* let [pageNum,setPage]=useState(1);
  const onPrev = ()=>{
    if(pageNum > 1){
      setPage(pageNum - 1);
    }
  }

  const onNext = ()=>{
    if(pageNum > 0){
      setPage(pageNum + 1);
    }
  } */
  return (
    <div className='flex justify-center border-3'>
      <div className='border-2 p-2 border-r-0 rounded-l-xl border-blue-400 ' 
      onClick={()=>{onPrev(pageNum-1)}}>
        Previous</div>

      <div className='border-2 p-2 border-r-0 border-blue-400 '>
        {pageNum}</div>
        
      <div className='border-2 p-2  rounded-r-xl border-blue-400 ' 
      onClick={()=>{onNext(pageNum+1)}}>
        Next</div>

    </div>
  )  
}

export default Pagination
