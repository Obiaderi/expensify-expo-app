import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MainButton from "../components/MainButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../themes/colors";

function WelcomeScreen(props) {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="flex h-screen justify-around">
        <View className="flex-row justify-center mt-5">
          <Image
            source={require("../../assets/images/welcome.gif")}
            className="h-96 w-96"
          />
        </View>
        <View className="mx-5 mb-20 ">
          <Text
            className={`${colors.heading} text-center text-2xl  font-bold mb-10`}
          >
            Welcome to Expensify
          </Text>
          <MainButton
            title={"Sign in"}
            style="mb-3"
            onPress={() => navigation.navigate("Signin")}
          />
          <MainButton
            title={"Sign up"}
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default WelcomeScreen;
