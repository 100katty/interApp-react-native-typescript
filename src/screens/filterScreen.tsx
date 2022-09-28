//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Loading } from "../components/Loading";
import { PokemonCard } from "../components/PokemonCard";
import { SearchInput } from "../components/SearchInput";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { SimplePokemon } from "../interfaces/appInterface";
import { styles } from "../theme/appTheme";

// create a component
export const FilterScreen = () => {
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
  const [pokemonFilteredReduce, setPokemonFilteredReduce] = useState<
    SimplePokemon[]
  >([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    /// console.log(isNaN(Number(term)));

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter((poke) =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
      setPokemonFilteredReduce(pokemonFiltered.slice(0, 5));
    } else {
      const pokemonById = simplePokemonList.find((poke) => poke.id === term);
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
      setPokemonFilteredReduce(pokemonFiltered.slice(0, 5));
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{
          position: "absolute",
          zIndex: 999,
        }}
      />

      <FlatList
        data={pokemonFilteredReduce}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // Header
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
            }}
          >
            {term}
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </>
  );
};
