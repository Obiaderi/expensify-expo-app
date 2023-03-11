import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

// Custom imports
import BackButton from "../components/BackButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../themes/colors";

function AddTripScreen(props) {
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");

  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (place && country) {
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
              Add Trip
            </Text>
            <View></View>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/4.png")}
              className="h-72 w-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Where on Earth?
            </Text>
            <TextInput
              value={place}
              onChangeText={(value) => setPlace(value)}
              className="p-3 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Which Country?
            </Text>
            <TextInput
              value={country}
              onChangeText={(value) => setCountry(value)}
              className="p-3 bg-white rounded-full mb-3"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddTrip}
            className="bg-primary p-3 rounded-full shadow-sm mx-2 mb-8"
          >
            <Text className="text-white text-center text-lg font-bold">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default AddTripScreen;
