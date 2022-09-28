import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FilterScreen } from "../screens/filterScreen";
import { PokemonsScreen } from "../screens/pokemonsScreens";
import { ListScreen } from "../screens/listScreen";
import { colores } from "../theme/appTheme";

const Tab = createBottomTabNavigator();

export const TapNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Filter") {
            return (
              <Ionicons
                name={
                  focused
                    ? "ios-search-circle-sharp"
                    : "ios-search-circle-outline"
                }
                size={35}
                color={color}
              />
            );
          } else if (route.name === "List") {
            return (
              <Ionicons
                name={
                  focused ? "ios-list-circle-sharp" : "ios-list-circle-outline"
                }
                size={35}
                color={color}
              />
            );
          } else if (route.name === "Pokemons") {
            return (
              <MaterialCommunityIcons
                name={"pokemon-go"}
                size={35}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: colores.InactiveTintColor,
        tabBarActiveTintColor: colores.ActiveTintColor,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          title: "Buscar",
          headerStyle: {
            backgroundColor: colores.primary,
          },
          headerTintColor: colores.headerTintColor,
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: "Lista",
          headerStyle: {
            backgroundColor: colores.primary,
          },
          headerTintColor: colores.headerTintColor,
        }}
      />
      <Tab.Screen
        name="Pokemons"
        component={PokemonsScreen}
        options={{
          title: "Pokemons",
          headerStyle: {
            backgroundColor: colores.primary,
          },
          headerTintColor: colores.headerTintColor,
        }}
      />
    </Tab.Navigator>
  );
};
