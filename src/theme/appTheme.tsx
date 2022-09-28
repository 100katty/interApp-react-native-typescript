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
    width: 350,
    backgroundColor: "#9AA0D3",
    marginTop: 5,
    borderRadius: 20,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 20,
    elevation: 5,
    paddingBottom: 10,
  },
  cardRow: {
    flexDirection: "row",
  },
  textBackground: {
    backgroundColor: "#F3F1F3",
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 20,
    elevation: 5,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
