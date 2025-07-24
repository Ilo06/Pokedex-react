import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import PokeDetails from "./PokeDetails.jsx";


export default function PokemonDetails() {
    const { nameUrl } = useParams();
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameUrl}`);
                const details = await res.json();

                const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameUrl}`);
                const species = await speciesRes.json();

                let evolutionChain = null;
                if (species.evolution_chain?.url) {
                    const evolutionRes = await fetch(species.evolution_chain.url);
                    if (evolutionRes.ok) evolutionChain = await evolutionRes.json();
                }

                const locationRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameUrl}/encounters`);
                const locations = locationRes.ok ? await locationRes.json() : [];

                const descriptionEntry = species.flavor_text_entries.find(entry => entry.language.name === "en") || {};
                const description = descriptionEntry.flavor_text?.replace(/\f/g, " ") ?? "Pas de description.";

                const getEvolutions = (chain) => {
                    if (!chain) return [];
                    const evo = [];
                    let current = chain;
                    do {
                        evo.push(current.species.name);
                        current = current.evolves_to[0];
                    } while (current);
                    return evo;
                };

                const evolutions = getEvolutions(evolutionChain?.chain);
                const locationNames = locations.map(loc => loc.location_area.name.replace(/-/g, " "));

                setResult({
                    id: details.id,
                    name: details.name,
                    image: details.sprites.other["official-artwork"].front_default,
                    types: details.types.map(t => t.type.name),
                    weight: details.weight,
                    height: details.height,
                    attack: details.stats.find(s => s.stat.name === "attack")?.base_stat ?? "N/A",
                    region: species.generation?.name ?? "Unknown",
                    description,
                    growthRate: species.growth_rate?.name ?? "Unknown",
                    location: locationNames.slice(0, 5),
                    evolution: evolutions.length > 0 ? evolutions : ["N/A"],
                });

            } catch (error) {
                console.error("Erreur :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [nameUrl]);

    if (loading) return <Loading />;
    if (!result) return <Error title={"400 Bad Request"} content={"The Pokemon you're trying to access does not exist."} />;

    return (
        <div className="">
            <Link to={"/"}>
                <i className="bx bxs-x-circle absolute bg-white rounded-full text-primary-red text-4xl"></i>
            </Link>
            <PokeDetails
                image={result.image}
                name={result.name}
                id={result.id}
                description={result.description}
                types={result.typs}
                region={result.region}
                height={result.height}
                weight={result.weight}
                attack={result.attack}
                growthRate={result.description}
                location={result.location}
                evolution={result.evolution}
            />
        </div>
    );
}
