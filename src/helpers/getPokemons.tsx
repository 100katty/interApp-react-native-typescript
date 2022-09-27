import { AxiosResponse } from "axios";
import { PokemonsAPIResponse } from "../interfaces/appInterface";
import pokemonApi from "./pokemonApi";

export function getPokemons(): Promise<AxiosResponse<PokemonsAPIResponse>> {
  return pokemonApi.get("/api/v2/pokemon?limit=1000&offset=0", {});
}
