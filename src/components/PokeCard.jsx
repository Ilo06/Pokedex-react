import getTypeColorClass from "../script/getColorType"

export default function PokeCard({ name, image, id, types, height, weight, moves, generation }) {
    return (
        <div key={name} className="cursor-pointer inset-0 backdrop-blur-3xl bg-gray-400/30 rounded-2xl w-64 p-4 shadow-lg hover:scale-105 transition-transform">
            <div className="flex flex-col items-center mb-4">
                <img src={image} alt={name} className="w-25 h-25 mb-2" />
                <h2 className="text-xl font-semibold capitalize text-gray-800">{name}</h2>
            </div>
            <div className="text-sm space-y-1 inset-0 ">
                <p className="bg-primary-blue w-fit px-3 py-1 mt-0 text-primary-white font-extrabold rounded-xl my-3"><strong>#</strong> {id}</p>
                <div className="flex items-center gap-2 flex-wrap  gap-x-1 inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800">
                    <strong className="flex items-center gap-x-1 text-gray-700">
                        <i className='bx bxs-filter'></i> Type:
                    </strong>
                    {types.map((type) => (
                        <span
                            key={type}
                            className={`${getTypeColorClass(type)} px-2 py-0.5 rounded-full text-xs font-bold capitalize`}
                        >
                            {type}
                        </span>
                    ))}
                </div>


                <p className="flex items-center gap-x-1 inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800">
                    <strong className="flex items-center gap-x-1">
                        <i className='bxr bx-ruler'></i> Height
                    </strong> : {height / 10} M
                </p>

                <p className="flex items-center gap-x-1 inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800">
                    <strong className="flex items-center gap-x-1">
                        <i className='bxr bx-dumbbell'></i> Weight
                    </strong> : {weight / 10} KG
                </p>



                <p className="inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800 px-1"><strong><i className='bxr mr-1  bxs-chess-knight'  ></i> Attacks :</strong> {moves.join(", ")}</p>

                <p className="flex items-center gap-x-1 inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800">
                    <strong className="flex items-center gap-x-1">
                        <i className='bxr bxs-dna'></i> Generation
                    </strong> : {generation}
                </p>

            </div>
        </div>
    )
}