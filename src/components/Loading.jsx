import LoadingImage from "../../public/pokeball_minimal.png";
import "../index.css"

export default function Loading() {
  return (
    <div className="cursor-progress gap-10 flex flex-col items-center justify-center inset-0 backdrop-blur-3xl bg-gray-400/30 w-[50vw] rounded-4xl mx-auto">
      <img
        src={LoadingImage}
        className="w-[20vw] bounce"
        alt="Loading Pokéball"
      />
      <div className="w-[5vw] h-3 rounded-[50%] bg-gray-700 shadow-pulse"></div>
      <h1 className="text-3xl mb-24 font-bold text-gray-800">Loading...</h1>
    </div>
  );
}
