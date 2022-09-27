import React from "react";
import { View, Text, Image } from "react-native";
import { SimplePokemon } from "../interfaces/appInterface";
import { colores, styles } from "../theme/appTheme";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <>
      <View style={{ ...styles.globalMargin, ...styles.cardpokemon }}>
        <View style={{ ...styles.cardRow }}>
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 5,
              color: colores.headerTintColor,
            }}
          >
            {"\n#" + pokemon.id}
          </Text>
          <Image
            source={require("../../assets/pokebola-blanca.png")}
            style={styles.pokebolaBG}
          />
        </View>
        <Text
          style={{
            ...styles.title,
            ...styles.globalMargin,
            marginBottom: 5,
            paddingBottom: 5,
            color: colores.primary,
          }}
        >
          {pokemon.name}
        </Text>
      </View>
    </>
  );
};
