import React, {useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

function Tag() {
    const [tag, setTag]=useState('apple')
    const {gif, loader, fetchData}=useGif(tag)

    function clickHandler(){
        fetchData(tag)
    }
    function changeHandler(event){
        setTag(event.target.value)
    }

  return (
    <div className='bg-blue-400 w-96 h-1/3 flex flex-col items-center justify-center gap-y-5 mt-[15px] border border-black rounded-md mb-4'>
        <h1 className='text-xl font-bold mt-4 uppercase underline'>Random {tag} GIF</h1>
       {
        loader?(<Spinner/>):( <img src={gif} alt='gifimg' className='rounded-md h-72 w-72'/>)
       }
       <input onChange={changeHandler} value={tag} className='bg-white-400 w-3/4 rounded-lg text-xl text-center font-serif mb-5'/>
        <button onClick={clickHandler} className='bg-yellow-400 w-3/4 rounded-lg text-2xl font-serif mb-5'>Generate</button>
    </div>
  )
}

export default Tag