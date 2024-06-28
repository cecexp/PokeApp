import { View, Text, FlatList } from "react-native";
import { useFetchPokemonList } from "../hooks/PokeApi";

const HomeScreen: React.FC = () => {
  const { pokemonList, loading } = useFetchPokemonList();

  if (loading) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Pokedex</Text>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => <Text key={item.name}>{item.name}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
