import whiteBall from "../../public/pokeball_minimal.png"

export default function Header({ search, setSearch }) {
    return (
        <>
            <div className="bg-secondar-red/50 shadow-2xl shadow-gray-800 inset-0 backdrop-blur-3xl sticky text-primary-white  top-5 z-20 px-4 py-4 rounded-2xl flex row justify-between cursor-pointer ">
                <h1 className='font-bold flex row items-center text-2xl '><img src={whiteBall} width={50} />Pokédex</h1>
                <div className="flex row justify-around items-center bg-primary-white text-primary-red w-52 px-2.5 rounded-2xl ">
                    <i className='bx bx-search text-primary-red text-2xl cursor-pointer'></i>
                    <input
                    type="search"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="grid w-36 h-9 bg-transparent outline-none border-none text-primary-red font-semibold"
                    placeholder="Search"
                />
                </div>
            </div>
        </>
    )
}

