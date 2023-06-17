
import Spinner from './Spinner';
import useGif from '../Hook/useGif';



function Random() {
  const {gif, loader, fetchData}=useGif()
    function clickHandler(){
        fetchData()
    }

  return (
    <div className='bg-green-400 w-96 h-1/3 flex flex-col items-center justify-center gap-y-5 mt-[15px] border border-black rounded-md'>
        <h1 className='text-xl font-bold mt-4 uppercase underline'>A Random GIF</h1>
       {
        loader?(<Spinner/>):( <img src={gif} alt='gifimg' className='rounded-md h-72 w-72'/>)
       }
        <button onClick={clickHandler} className='bg-yellow-400 w-3/4 rounded-lg text-2xl font-serif mb-5'>Generate</button>
    </div>
  )
}

export default Random