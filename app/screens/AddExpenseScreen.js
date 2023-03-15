import { useNavigation } from "@react-navigation/native";
import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

// Custom imports
import BackButton from "../components/BackButton";
import CustomSnackbar from "../components/CustomSnackbar";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenWrapper from "../components/ScreenWrapper";
import { expensesRef } from "../config/firebase";
import { categories } from "../constants";
import { colors } from "../themes/colors";

function AddExpensesScreen({ route }) {
  const { id } = route.params;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const navigation = useNavigation();

  const handleExpense = async () => {
    if (title && category && amount) {
      // navigation.goBack();
      try {
        setLoading(true);

        let doc = await addDoc(expensesRef, {
          title,
          category,
          amount,
          tripId: id,
        });

        setLoading(false);

        if (doc && doc.id) {
          navigation.goBack();
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setSnackbarMsg("Something went wrong");
        setShowSnackbar(true);
      }
    } else {
      setSnackbarMsg("All fields are required");
      setShowSnackbar(true);
    }
  };

  return (
    <ScreenWrapper>
      {loading && <LoadingSpinner />}
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="flex-row justify-between items-center mt-4">
            <BackButton />
            <Text
              className={`${colors.heading} text-xl font-bold text-center mr-3`}
            >
              Add Expense
            </Text>
            <View></View>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require("../../assets/images/expenseBanner.png")}
              className="h-72 w-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput
              style={{ elevation: 1 }}
              value={title}
              onChangeText={(value) => setTitle(value)}
              className="p-3 bg-white rounded-full"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              How much?
            </Text>
            <TextInput
              style={{ elevation: 1 }}
              value={amount}
              onChangeText={(value) => setAmount(value)}
              className="p-3 bg-white rounded-full"
            />
            <View className="space-y-2">
              <Text className={`${colors.heading} text-lg font-bold`}>
                Catgory
              </Text>
              <View className="flex-row flex-wrap items-center">
                {categories.map((item, index) => {
                  let bgColor =
                    category === item.value ? "bg-green-200" : "bg-white";
                  return (
                    <TouchableOpacity
                      style={{ elevation: 2 }}
                      key={index}
                      onPress={() => setCategory(item.value)}
                      className={`${bgColor} rounded-full p-1 px-4 mb-2 mr-2`}
                    >
                      <Text className={`text-center text-sm`}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleExpense}
            className="bg-primary p-3 rounded-full shadow-sm mx-2 mb-8"
          >
            <Text className="text-white text-center text-lg font-bold">
              Add Expense
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
  );
}

export default AddExpensesScreen;
