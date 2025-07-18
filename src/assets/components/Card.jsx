import { useState, useEffect } from "react";

export default function Card() {
  const [Pokemon, setPokemon] = useState([]); // null au lieu de []

  useEffect(() => {
    const fetchPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
        .then((response) => response.json())
        .then((json) => setPokemon(json.results));
    };
    fetchPokemon();
  }, []);

  // Attente du chargement
  if (!Pokemon) return <p>Chargement...</p>;

  return (
    <>
      <h1>{Pokemon.name}</h1>
      <ul>
        <li>Base Experience: {Pokemon.base_experience}</li>
        <li>Height: {Pokemon.height}</li>
        <li>Weight: {Pokemon.weight}</li>
        <li>Type: {Pokemon.types.map(t => t.type.name).join(", ")}</li>
      </ul>
    </>
  );
}
