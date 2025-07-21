import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

import getTypeColorClass from "../script/getColorType.js";


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
            <section className="py-20 px-8 items-center justify-between cursor-pointer gap-10 flex flex-col sm:flex-row inset-0 backdrop-blur-3xl bg-gray-400/30 w-[50vw] rounded-4xl self-center shadow-2xl shadow-gray-800 mx-auto">
                <div className="flex-1/2">
                    <img src={result.image} className="mx-auto w-40 h-40" />
                    <h1 className="text-3xl font-bold capitalize text-center my-3">{result.name}</h1>
                    <center>
                        <h3 className="bg-primary-yellow w-fit px-4 rounded-2xl font-bold mb-2 ">#{result.id}</h3>
                    </center>
                    <p className="text-sm italic text-center text-black mb-4">{result.description}</p>
                </div><div className="flex-1/2  border-l-2 pl-10">
                    <p className="my-1 flex flex-wrap gap-2 items-center inset-0 backdrop-blur-2xl bg-white/20 rounded-2xl px-2.5 py-0.5">
                        <strong className="flex items-center text-nowrap">
                            <i className='bx mr-1 bxs-filter'></i>Type:
                        </strong>
                        {result.types.map((type) => (
                            <span
                                key={type}
                                className={`${getTypeColorClass(type)} px-2 py-0.5 rounded-full text-xs font-bold capitalize`}
                            >
                                {type}
                            </span>
                        ))}
                    </p>

                    <p className="my-1 flex row gap-2 inset-0 backdrop-blur-2xl bg-white/20  rounded-2xl px-2.5 py-0.5 ">
                        <strong className="flex row items-center text-nowrap"><i className='bxr mr-1 bx-area'></i> Region:</strong> {result.region}
                    </p>
                    <p className="my-1 flex row gap-2 inset-0 backdrop-blur-2xl bg-white/20  rounded-2xl px-2.5 py-0.5 ">
                        <strong className="flex row items-center text-nowrap"><i className='bxr mr-1  bx-ruler'></i>Height:</strong> {result.height / 10} M
                    </p>
                    <p className="my-1 flex row gap-2 inset-0 backdrop-blur-2xl bg-white/20  rounded-2xl px-2.5 py-0.5 ">
                        <strong className="flex row items-center text-nowrap"><i className='bxr mr-1  bx-dumbbell'></i>Weight:</strong> {result.weight / 10} KG
                    </p>
                    <p className="my-1 flex row gap-2 inset-0 backdrop-blur-2xl bg-white/20  rounded-2xl px-2.5 py-0.5 ">
                        <strong className="flex row items-center text-nowrap"><i className='bxr mr-1  bxs-chess-knight'></i> Attacks:</strong> {result.attack}
                    </p>
                    <p className="my-1 flex row gap-2 inset-0 backdrop-blur-2xl bg-white/20  rounded-2xl px-2.5 py-0.5 mb-3 text-nowrap ">
                        <strong className="flex row items-center text-nowrap"><i class='bxr mr-1 bxs-trending-up'  ></i> Growth Rate:</strong> {result.growthRate}
                    </p>
                    <p className="my-1  "><strong>Location:</strong> {result.location.join(", ")}</p>
                    <p className="my-1  "><strong>Évolution:</strong> {result.evolution.join(" → ")}</p>
                </div>
            </section>
        </div>
    );
}
