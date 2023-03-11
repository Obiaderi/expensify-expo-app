import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

// Custom imports
import BackButton from "../components/BackButton";
import FormWithTitle from "../components/FormWithTitle";
import MainButton from "../components/MainButton";
import ScreenWrapper from "../components/ScreenWrapper";
import TextButton from "../components/TextButton";
import { colors } from "../themes/colors";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="flex-row justify-between items-center mt-4">
            <BackButton />
            <Text
              className={`${colors.heading} text-xl font-bold text-center mr-3`}
            >
              Sign in
            </Text>
            <View></View>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/login.png")}
              className="h-72 w-72"
            />
          </View>
          <View className="mx-2">
            <FormWithTitle
              title="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              textStyle={`${colors.heading}`}
              style="mb-3"
            />
            <FormWithTitle
              title="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)}
              textStyle={`${colors.heading}`}
              style="mb-3"
            />
            <TextButton
              title={"Don't have an account? Sign up"}
              onPress={() => {}}
              style="flex-row justify-start mb-3"
            />
            <TextButton
              title={"Forgot password?"}
              onPress={() => {}}
              style="flex-row justify-end"
            />
          </View>
        </View>
        <View>
          <MainButton title={"Sign in"} onPress={handleSubmit} style="mb-8" />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default SigninScreen;
