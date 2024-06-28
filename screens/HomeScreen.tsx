import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { useFetchPokemonList } from "../hooks/PokeApi";
const HomeScreen: React.FC = () => {
  const { pokemonList, loading } = useFetchPokemonList();

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 10 }}>
        Pokedex
      </Text>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Card style={{ margin: 12, padding: 12 }}>
            <Text>{item.name}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default HomeScreen;
