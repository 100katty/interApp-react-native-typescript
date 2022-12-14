import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../helpers/pokemonApi";
import {
  PokemonsAPIResponse,
  Result,
  SimplePokemon,
} from "../interfaces/appInterface";

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonsAPIResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=1200"
    );
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split("/");
      const id = urlParts[urlParts.length - 2];

      return { id, name };
    });

    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    simplePokemonList,
  };
};
