import whiteBall from "../../public/pokeball_minimal.png"



/**ici c'est Tsilavina */

import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-primary-red dark:bg-gray-900 text-primary-white dark:text-gray-200 px-4 py-4 rounded-2xl flex justify-between items-center cursor-pointer shadow-lg">
      <h1 className="font-bold text-2xl">Pokédex</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-primary-white dark:bg-gray-700 text-primary-red dark:text-gray-300 w-52 px-2.5 rounded-md">
          <FaSearch className="text-2xl cursor-pointer" />
          <input
            type="search"
            name="search"
            className="w-36 h-9 bg-transparent outline-none border-none text-primary-red dark:text-gray-300 font-semibold"
            placeholder="Search"
          />
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-primary-white dark:bg-gray-700 text-primary-red dark:text-gray-300 rounded-md px-4 py-2 flex items-center space-x-2"
        >
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          <span>{darkMode ? "Sombre" : "Clair"}</span>
        </button>
      </div>
    </div>
  );
}

