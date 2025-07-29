export default function getTypeColorClass(type) {
    const typeColors = {
        normal: "bg-gray-400 text-white",
        fire: "bg-red-500 text-white",
        water: "bg-blue-500 text-white",
        electric: "bg-yellow-400 text-black dark:text-white",
        grass: "bg-green-500 text-white",
        ice: "bg-cyan-300 text-black dark:text-white",
        fighting: "bg-red-700 text-white",
        poison: "bg-purple-500 text-white",
        ground: "bg-yellow-700 text-white",
        flying: "bg-indigo-300 text-black dark:text-white",
        psychic: "bg-pink-500 text-white",
        bug: "bg-lime-500 text-black dark:text-white",
        rock: "bg-yellow-800 text-white",
        ghost: "bg-indigo-700 text-white",
        dark: "bg-gray-800 text-white",
        dragon: "bg-indigo-900 text-white",
        steel: "bg-gray-500 text-white",
        fairy: "bg-pink-300 text-black dark:text-white",
    };

    return typeColors[type] || "bg-gray-200 text-black dark:text-white";
};
