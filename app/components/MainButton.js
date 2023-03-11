import React from "react";
import { Text, TouchableOpacity } from "react-native";

function MainButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${style} shadow p-3 rounded-full bg-primary`}
    >
      <Text className="text-center text-lg text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
}

export default MainButton;
