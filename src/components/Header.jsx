import whiteBall from "../../public/pokeball_minimal.png"

export default function Header({ search, setSearch, isDarkMode, setIsDarkMode }) {
    return (
        <div className={`shadow-2xl shadow-gray-800 inset-0 backdrop-blur-3xl sticky h-22 top-5 z-20 px-4 py-4 rounded-2xl flex justify-between items-center cursor-pointer transition-all duration-300
            ${isDarkMode ? "bg-blue-900/50 text-gray-100" : "bg-primary-red/50 text-primary-white"}`}>

            <h1 className='font-bold flex items-center text-2xl'>
                <img src={whiteBall} className='w-20' />
                <span className='hidden sm:inline'>Pokédex</span>
            </h1>

            <div className="flex items-center gap-4">
                <div className={`flex items-center rounded-2xl px-3 w-52 
                    ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-primary-red"}`}>
                    <i className={`bx bx-search text-xl mr-1 ${isDarkMode ? "text-white" : "text-primary-red"}`}></i>
                    <input
                        type="search"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`w-36 h-9 bg-transparent outline-none border-none font-semibold 
                            ${isDarkMode ? "text-white" : "text-primary-red"}`}
                        placeholder="Search"
                    />
                </div>

                <button
                    onClick={() => setIsDarkMode(prev => !prev)}
                    className="text-2xl flex items-center justify-center"
                >
                    <i className={`bx ${isDarkMode ? "bx-sun text-yellow-400" : "bx-moon text-white"}`}></i>
                </button>
            </div>
        </div>
    );
}
