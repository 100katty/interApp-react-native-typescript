//import liraries
import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonContext } from "../context/PokemonContext";
import { styles } from "../theme/appTheme";

export const PokemonsScreen = () => {
  const pokemons = useContext(PokemonContext);
  return (
    <View style={styles.containerScreen}>
      {/*
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          < PokemonCard pokemon={item} />
        )}
        keyExtractor={(item) => item.id}
      />
      */}
    </View>
  );
};
