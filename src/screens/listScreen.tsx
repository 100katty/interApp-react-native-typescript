//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { PokemonCard } from "../components/PokemonCard";
import { usePokemonInfitiScroll } from "../hooks/usePokemonInfitiScroll";
import { styles } from "../theme/appTheme";

// create a component
export const ListScreen = () => {
  const { simplePokemonList, loadPokemons } = usePokemonInfitiScroll();

  return (
    <>
      <View style={{ flex: 1, margin: 5, alignItems: "center" }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
