import { useState, useEffect } from "react";

export default function Card() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
                const data = await res.json();

                const detailedPokemons = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const detailsRes = await fetch(pokemon.url);
                        const details = await detailsRes.json();

                        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`);
                        const species = await speciesRes.json();

                        return {
                            name: details.name,
                            height: details.height,
                            weight: details.weight,
                            abilities: details.abilities.map((a) => a.ability.name),
                            moves: details.moves.slice(0, 3).map((m) => m.move.name),
                            generation: species.generation.name,
                            sprite: details.sprites.front_default,
                            id: details.id
                        };
                    })
                );

                setPokemons(detailedPokemons);
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors du chargement :", error);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) return <p className="text-center text-lg mt-10">Chargement...</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Liste des Pokémon</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {pokemons.map((pokemon) => {
                    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

                    return (
                        <div key={pokemon.name} className="border-4 border-red-500 bg-white rounded-2xl w-64 p-4 shadow-lg hover:scale-105 transition-transform">
                            <div className="flex flex-col items-center mb-4">
                                <img src={image} alt={pokemon.name} className="w-25 h-25 mb-2" />
                                <h2 className="text-xl font-semibold capitalize">{pokemon.name}</h2>
                            </div>
                            <div className="text-sm space-y-1">
                                <p><strong>Taille :</strong> {pokemon.height}</p>
                                <p><strong>Poids :</strong> {pokemon.weight}</p>
                                <p><strong>Talents :</strong> {pokemon.abilities.join(", ")}</p>
                                <p><strong>Attaques :</strong> {pokemon.moves.join(", ")}</p>
                                <p><strong>Génération :</strong> {pokemon.generation}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
