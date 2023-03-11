import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

// Custom Imports
import randomImage from "../../assets/images/randomImages";
import BackButton from "../components/BackButton";
import EmptyList from "../components/EmptyList";
import ExpenseCard from "../components/ExpenseCard";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../themes/colors";

const expenses = [
  {
    id: 1,
    title: "Hotel",
    amount: 10,
    category: "Accomodation",
  },
  {
    id: 2,
    title: "Food",
    amount: 50,
    category: "Food",
  },
  {
    id: 3,
    title: "Transport",
    amount: 80,
    category: "Transport",
  },
  {
    id: 4,
    title: "Bought a jacket",
    amount: 130,
    category: "Shopping",
  },
  {
    id: 5,
    title: "Watch a movie",
    amount: 150,
    category: "Entertainment",
  },
];

function TripExpensesScreen({ route }) {
  const { id, place, country } = route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center mx-4 mt-4">
        <BackButton />
        <Text
          className={`${colors.heading} text-xl font-bold text-center mr-3`}
        >
          {place}, {country}
        </Text>
        <View></View>
      </View>

      <View className="flex-row justify-center items-center rounded-xl mx-4 mb-4">
        <Image
          source={require("../../assets/images/7.png")}
          className="w-80 h-80"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-start">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Expenses
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddExpense")}
            className="p-2 px-3 bg-white border-gray-200 rounded-full"
          >
            <Text className={colors.heading}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 430 }}>
          <FlatList
            data={expenses}
            ListEmptyComponent={
              <EmptyList message="You haven't recorded any expenses yet" />
            }
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            className="mx-1"
            renderItem={({ item }) => <ExpenseCard item={item} />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default TripExpensesScreen;
