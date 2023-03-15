import { useNavigation } from "@react-navigation/native";
import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

// Custom imports
import BackButton from "../components/BackButton";
import CustomSnackbar from "../components/CustomSnackbar";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenWrapper from "../components/ScreenWrapper";
import { tripsRef } from "../config/firebase";
import { colors } from "../themes/colors";

function AddTripScreen(props) {
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const navigation = useNavigation();
  const { user } = useSelector((state) => state.user);

  const handleAddTrip = async () => {
    if (place && country) {
      // navigation.navigate("Home");
      try {
        setLoading(true);

        const doc = await addDoc(tripsRef, {
          place,
          country,
          userId: user.uid,
        });

        setLoading(false);

        if (doc && doc.id) {
          navigation.goBack();
        }
      } catch (error) {
        console.log(error);
        setSnackbarMsg("Something went wrong");
        setShowSnackbar(true);
      }
    } else {
      setSnackbarMsg("All fields are required");
      setShowSnackbar(true);
    }
  };

  return (
    <View className="relative">
      {loading && <LoadingSpinner />}
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
                style={{ elevation: 1 }}
                value={place}
                onChangeText={(value) => setPlace(value)}
                className="p-3 bg-white rounded-full mb-3"
              />
              <Text className={`${colors.heading} text-lg font-bold`}>
                Which Country?
              </Text>
              <TextInput
                style={{ elevation: 1 }}
                value={country}
                onChangeText={(value) => setCountry(value)}
                className="p-3 bg-white rounded-full mb-3"
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{ elevation: 2 }}
              onPress={handleAddTrip}
              className="bg-primary p-3 rounded-full shadow-sm mx-2 mb-8"
            >
              <Text className="text-white text-center text-lg font-bold">
                Add Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CustomSnackbar
            bgColor="bg-red-400"
            visible={showSnackbar}
            setVisible={setShowSnackbar}
            message={snackbarMsg}
          />
        </View>
      </ScreenWrapper>
    </View>
  );
}

export default AddTripScreen;
