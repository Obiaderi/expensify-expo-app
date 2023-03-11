import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

// Custom Imports
import randomImage from "../../assets/images/randomImages";
import EmptyList from "../components/EmptyList";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../themes/colors";

const trips = [
  {
    id: 1,
    place: "Kathmandu",
    country: "Nepal",
  },
  {
    id: 2,
    place: "London Eye",
    country: "England",
  },
  {
    id: 3,
    place: "Washington",
    country: "USA",
  },
  {
    id: 4,
    place: "New York",
    country: "America",
  },
  {
    id: 5,
    place: "Bosston",
    country: "Nepal",
  },
  {
    id: 6,
    place: "Marrid",
    country: "Las vegas",
  },
];

function HomeScreen(props) {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-start">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddTrip")}
            className="p-2 px-3 bg-white border-gray-200 rounded-full"
          >
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 430 }}>
          <FlatList
            data={trips}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message="You haven't recorded any trips yet" />
            }
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            className="mx-1"
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TripExpenses", { ...item })}
                className="bg-white p-3 rounded-2xl mb-3 shadow-md"
              >
                <View>
                  <Image source={randomImage()} className="w-36 h-36 mb-2" />
                  <Text>{item.place}</Text>
                  <Text>{item.country}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default HomeScreen;
