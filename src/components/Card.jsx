
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading.jsx";

import PokeCard from "./PokeCard.jsx";

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
                            image: details.sprites.other["official-artwork"].front_default,
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


    if (loading) return <Loading />;

    return (
        <div className="p-6">
            <div className="flex flex-wrap justify-center gap-6">
                {pokemons.map((pokemon) => {

                    return (
                        <Link to={`/details/${pokemon.name}`} >
                            <PokeCard
                                name={pokemon.name}
                                image={pokemon.image}
                                id={pokemon.id}
                                types={pokemon.types}
                                height={pokemon.height}
                                weight={pokemon.weight}
                                moves={pokemon.moves}
                                generation={pokemon.generation}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
