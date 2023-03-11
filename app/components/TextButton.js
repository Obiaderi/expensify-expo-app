import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../themes/colors";

function TextButton({ title, onPress, style }) {
  return (
    <View>
      <TouchableOpacity className={`${style}`} onPress={onPress}>
        <Text
          className={`${colors.heading} text-center text-sm font-bold mt-3`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TextButton;
