import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Random() {

  const {loading, gif, fetchData} = useGif();

  return <div className="bg-[#0D1926] flex flex-col  items-center max-w-[650px] mx-auto gap-y-4">
    <h1 className="text-2xl font-semibold text-white uppercase p-1">Random Gif</h1>
    {
      loading ? (<Spinner />) : (<img src={gif} alt="gif"
        width='450px' height='450px'
        className="border border-white rounded-md"
      />)
    }
    <button onClick={() => { fetchData() }}
      className="bg-yellow-500 px-[12px] py-[8px] rounded-lg w-10/12 mb-5">Generate</button>
  </div>;
}
