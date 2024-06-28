import { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2";

export interface Pokemon {
  name: string;
  url: string;
}

export const useFetchPokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(`${API_URL}/pokemon`);
        if (!response.ok) {
          throw new Error("Failed to fetch Pokemon list");
        }
        const data = await response.json();
        setPokemonList(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return { pokemonList, loading };
};
