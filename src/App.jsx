import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {


  return <div className="bg-[#213F5F] max-h-max w-full flex flex-col justify-center py-10 gap-y-5">
    <h1 className="bg-white text-3xl text-center font-bold py-2 rounded-md ml-5 mr-5 uppercase">Random GIF</h1>
    <div className="flex flex-col gap-5">
      <div className="rounded-lg"><Random /></div>
      <div className="rounded-lg"><Tag /></div>
    </div>
  </div>;
}
