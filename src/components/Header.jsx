import { FaSun, FaMoon, FaSearch } from "react-icons/fa";

export default function Header({ search, setSearch, darkMode, toggleDarkMode }) {
  return (
    <div className="sticky top-0 z-50 bg-primary-red/80 dark:bg-gray-900/80 backdrop-blur-2xl text-white dark:text-gray-200 px-4 py-4 rounded-2xl flex justify-between items-center shadow-lg transition-all duration-300">
      <div className="flex items-center gap-2">
        <img src="/pokeball.png" alt="pokeball" className="w-8 h-8 animate-bounce" style={{animationDuration: '1.2s'}} />
        <h1 className="font-bold text-2xl">Pokédex</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white dark:bg-gray-700 text-primary-red dark:text-gray-300 w-52 px-2.5 rounded-md">
          <FaSearch className="text-xl cursor-pointer" />
          <input
            type="search"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-36 h-9 bg-transparent outline-none border-none text-primary-red dark:text-gray-300 font-semibold"
            placeholder="Search"
          />
        </div>

        <button
          onClick={toggleDarkMode}
          className="bg-white dark:bg-gray-700 text-primary-red dark:text-gray-300 rounded-md px-4 py-2 flex items-center justify-center cursor-pointer"
        >
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>
    </div>
  );
}