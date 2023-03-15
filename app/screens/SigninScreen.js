import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";

// Custom imports
import CustomSnackbar from "../components/CustomSnackbar";
import BackButton from "../components/BackButton";
import FormWithTitle from "../components/FormWithTitle";
import MainButton from "../components/MainButton";
import ScreenWrapper from "../components/ScreenWrapper";
import TextButton from "../components/TextButton";
import { colors } from "../themes/colors";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import { setUserLoading } from "../redux/slices/userSlice";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [logInfo, setLogInfo] = useState(false);

  const { userLoading } = useSelector((state) => state.user);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      setVisible(true);
    } else {
      // navigation.navigate("Home");
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(setUserLoading(false));
        setLogInfo(true);
      }
    }
  };

  return (
    <View className="relative">
      {userLoading && <LoadingSpinner />}
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
                inputStyles={visible || logInfo ? "border border-red-500" : ""}
                onChangeText={(value) => setEmail(value)}
                textStyle={`${colors.heading}`}
                style="mb-3"
              />
              <FormWithTitle
                title="Password"
                secureTextEntry={true}
                value={password}
                inputStyles={visible || logInfo ? "border border-red-500" : ""}
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
        <View>
          <CustomSnackbar
            bgColor="bg-red-500"
            visible={visible}
            setVisible={setVisible}
            message="Email and password are required"
          />

          <CustomSnackbar
            bgColor="bg-yellow-500"
            visible={logInfo}
            setVisible={setLogInfo}
            message="Incorrect email or password"
          />
        </View>
      </ScreenWrapper>
    </View>
  );
}

export default SigninScreen;
