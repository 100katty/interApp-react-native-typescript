import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import { styles } from "../theme/appTheme";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({ style, onDebounce }: Props) => {
  const [textValue, setTextValue] = useState("");
  const deboncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(deboncedValue);
  }, [deboncedValue]);

  return (
    <View style={{ marginTop: 40 }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar pokemon"
          style={{
            ...styles.textInput,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />

        <Ionicons name="search" size={30} color={"gray"} />
      </View>
    </View>
  );
};
