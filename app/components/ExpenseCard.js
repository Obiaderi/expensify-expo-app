import React from "react";
import { Text, View } from "react-native";
import { categoryBG, colors } from "../themes/colors";
import { currencyFormatter } from "../utils";

function ExpenseCard({ item }) {
  return (
    <View
      style={{
        elevation: 5,
        backgroundColor: categoryBG[item.category] || "#fff",
      }}
      className="flex-row justify-between items-center p-3 px-4 mb-3 rounded-2xl"
    >
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>

      <View>
        <Text>{currencyFormatter(item.amount)}</Text>
      </View>
    </View>
  );
}

export default ExpenseCard;
