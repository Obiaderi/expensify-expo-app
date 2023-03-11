import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

// Custom imports
import BackButton from "../components/BackButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { categories } from "../constants";
import { colors } from "../themes/colors";

function AddExpensesScreen(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const navigation = useNavigation();

  const handleExpense = () => {
    if (title && category && amount) {
      navigation.goBack();
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
              Add Expense
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
            <Text className={`${colors.heading} text-lg font-bold`}>Title</Text>
            <TextInput
              value={title}
              onChangeText={(value) => setTitle(value)}
              className="p-3 bg-white rounded-full"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Amount
            </Text>
            <TextInput
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
                      key={index}
                      onPress={() => setCategory(item.value)}
                      className={`${bgColor} rounded-full shadow-sm p-1 px-4 mb-2 mr-2`}
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
    </ScreenWrapper>
  );
}

export default AddExpensesScreen;
