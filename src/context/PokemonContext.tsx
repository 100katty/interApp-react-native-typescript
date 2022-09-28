import { useState, createContext, useEffect } from "react";
import { pokemonApi } from "../helpers/pokemonApi";
import { Result } from "../interfaces/appInterface";

export interface PokemonContextProps {
  pokemons: Result[];
}
export const PokemonContext = createContext({} as PokemonContextProps);

export const ProductsProvider = ({ children }: any) => {
  const [pokemons, setPokemons] = useState<Result[]>([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
