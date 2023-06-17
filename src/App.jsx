import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="background w-full min-h-screen flex flex-col items-center">
      <h1 className="bg-white w-11/12 mx-auto text-center mt-[40px] text-2xl font-bold rounded-lg p-1">Random GIFS</h1>
      <div className="flex flex-col gap-y-10 mt-[30px] w-full items-center">
        <Tag/>
        <Random/>
       
      </div>
    </div>
  )
}
