import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PokeDetails from "./screens/PokeDetails";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Pokémon List" }}
        />
        <Stack.Screen
          name="PokemonDetail"
          component={PokeDetails}
          options={{ title: "Pokémon Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
