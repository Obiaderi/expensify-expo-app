import { ActivityIndicator, Image, Text, View } from "react-native";
import React from "react";
import { colors } from "../themes/colors";
import ScreenWrapper from "./ScreenWrapper";

const LoadingSpinner = () => {
  return (
    <View className="bg-black absolute h-full w-full z-10 flex items-center justify-center opacity-60">
      <Image
        className="h-28 w-28"
        source={require("../../assets/loading.gif")}
      />
    </View>
  );
};

export default LoadingSpinner;
