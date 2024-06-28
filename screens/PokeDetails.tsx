import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";

const PokeDetails: React.FC<{ route: any }> = ({ route }) => {
  const { pokemonName } = route.params;
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemonData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setIsLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`,
        }}
      />
      <Text style={styles.name}>{pokemonData.name}</Text>
      <Text style={styles.info}>Height: {pokemonData.height * 10} cm</Text>
      <Text style={styles.info}>Weight: {pokemonData.weight / 10} kg</Text>
      <Text style={styles.info}>Abilities:</Text>
      {pokemonData.abilities.map((ability: any, index: number) => (
        <Text key={index} style={styles.info}>
          - {ability.ability.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default PokeDetails;
