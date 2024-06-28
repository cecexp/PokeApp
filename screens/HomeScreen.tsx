import React from "react";
import { useFetchPokemonList } from "../hooks/PokeApi";

const HomeScreen: React.FC = () => {
  const { pokemonList, loading } = useFetchPokemonList();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;
