import { useState, useEffect } from "react";

export default function Card() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
      .then((response) => response.json())
      .then((json) => setPokemons(json.results));
  }, []);

  if (!pokemons.length) return <p>Chargement...</p>;

  return (
    <>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon, index) => {
          const id = pokemon.url.split("/")[6]; 
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <li key={pokemon.name} style={{ marginBottom: "10px" }}>
              <img src={image} alt={pokemon.name} width="50" />
              <span>{pokemon.name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
