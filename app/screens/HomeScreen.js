import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { signOut } from "firebase/auth";

// Custom Imports
import randomImage from "../../assets/images/randomImages";
import EmptyList from "../components/EmptyList";
import ScreenWrapper from "../components/ScreenWrapper";
import { auth, tripsRef } from "../config/firebase";
import { colors } from "../themes/colors";
import { useSelector } from "react-redux";
import { getDocs, query, where } from "firebase/firestore";
import LoadingSpinner from "../components/LoadingSpinner";

function HomeScreen(props) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const isFocused = useIsFocused();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchTrips();
    }
  }, [isFocused]);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const q = await query(tripsRef, where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setTrips(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl`}>
          Expensify
        </Text>
        <TouchableOpacity
          style={{ elevation: 2 }}
          onPress={handleLogout}
          className="p-2 px-3 bg-white border-gray-200 rounded-full"
        >
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
            style={{ elevation: 2 }}
            onPress={() => navigation.navigate("AddTrip")}
            className="p-2 px-3 bg-white border-gray-200 rounded-full"
          >
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View className="relative" style={{ height: 430 }}>
          {loading && <LoadingSpinner />}
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
                style={{ elevation: 1 }}
                onPress={() => navigation.navigate("TripExpenses", { ...item })}
                className="bg-white p-3 rounded-2xl mb-3"
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
