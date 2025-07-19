
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading.jsx";


export default function Card({ offset, search }) {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
                const data = await res.json();

                let filtered = data.results.filter(p =>
                    p.name.toLowerCase().includes(search.toLowerCase())
                );

                if (search === "") {
                    filtered = filtered.slice(offset, offset + 10);
                }

                const detailedPokemons = await Promise.all(
                    filtered.map(async (pokemon) => {
                        const detailsRes = await fetch(pokemon.url);
                        const details = await detailsRes.json();

                        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`);
                        const species = await speciesRes.json();

                        return {
                            id: details.id,
                            image : details.sprites.other["official-artwork"].front_default,
                            name: details.name,
                            height: details.height,
                            weight: details.weight,
                            abilities: details.abilities.map((a) => a.ability.name),
                            moves: details.moves.slice(0, 3).map((m) => m.move.name),
                            types: details.types.map((t) => t.type.name),
                            generation: species.generation.name,
                            sprite: details.sprites.front_default,
                        };
                    })
                );

                setPokemons(detailedPokemons);
            } catch (error) {
                console.error("Erreur lors du chargement :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [offset, search]);


    if (loading) return <Loading/>;

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Pokemon List</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {pokemons.map((pokemon) => {

                    return (
                        <Link to={`/details/${pokemon.name}`} >
                            <div key={pokemon.name} className="border-4 border-secondar-red cursor-pointer inset-0 backdrop-blur-3xl bg-gray-400/30 rounded-2xl w-64 p-4 shadow-lg hover:scale-105 transition-transform">
                                <div className="flex flex-col items-center mb-4">
                                    <img src={pokemon.image} alt={pokemon.name} className="w-25 h-25 mb-2" />
                                    <h2 className="text-xl font-semibold capitalize text-gray-800">{pokemon.name}</h2>
                                </div>
                                <div className="text-sm space-y-1 inset-0 ">
                                    <p className="bg-primary-blue w-fit px-3 py-1 mt-0 text-primary-white font-extrabold rounded-xl my-3"><strong>#</strong> {pokemon.id}</p>
                                    <p className="inset-0 backdrop-blur-sm bg-primary-yellow/30 p-1 rounded-xl pl-2 text-gray-800 px-1"><strong>Type :</strong> {pokemon.types.join(", ")}</p>
                                    <p className="inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800 px-1"><strong>Height :</strong> {pokemon.height}</p>
                                    <p className="inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800 px-1"><strong>Weight :</strong> {pokemon.weight}</p>
                                    <p className="inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800 px-1"><strong>Abilities :</strong> {pokemon.abilities.join(", ")}</p>
                                    <p className="inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800 px-1"><strong>Attacks :</strong> {pokemon.moves.join(", ")}</p>
                                    <p className="inset-0 backdrop-blur-sm bg-white/30 p-1 rounded-xl pl-2 text-gray-800 px-1"><strong>Generation :</strong> {pokemon.generation}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
