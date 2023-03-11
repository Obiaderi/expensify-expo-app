import React from "react";
import { Image, Text, View } from "react-native";

function EmptyList({ message = "No data found" }) {
  return (
    <View className="flex justify-center items-center mt-10 space-y-3">
      <Image
        source={require("../../assets/images/empty.png")}
        className="w-36 h-36"
      />
      <Text className="font-bold text-gray-400 italic">{message}</Text>
    </View>
  );
}

export default EmptyList;
