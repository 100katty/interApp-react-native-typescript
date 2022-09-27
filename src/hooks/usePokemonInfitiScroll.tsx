import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../helpers/pokemonApi";
import {
  PokemonsAPIResponse,
  Result,
  SimplePokemon,
} from "../interfaces/appInterface";

export const usePokemonInfitiScroll = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );
  const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=10");

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PokemonsAPIResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split("/");
      const id = urlParts[urlParts.length - 2];

      return { id, name };
    });

    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };
  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isLoading,
    simplePokemonList,
    loadPokemons,
  };
};
