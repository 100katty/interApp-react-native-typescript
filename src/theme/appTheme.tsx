import { StyleSheet } from "react-native";

export const colores = {
  primary: "#3D43BB",
  InactiveTintColor: "gray",
  ActiveTintColor: "#3D43BB",
  headerTintColor: "#fff",
  fontWeight: "bold",
};

export const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDEEF5",
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  pokebolaBG: {
    position: "absolute",
    width: 200,
    height: 200,
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
  },
  cardpokemon: {
    backgroundColor: "#9AA0D3",
    marginTop: 5,
    marginBottom: 5,
  },
  cardRow: {
    flexDirection: "row",
  },
});
