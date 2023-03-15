import React from "react";
import { Text, TextInput, View } from "react-native";

function FormWithTitle({
  value,
  onChangeText,
  title,
  style,
  textStyle,
  inputStyles,
  ...otherProps
}) {
  return (
    <View className={`${style} space-y-1`}>
      <Text className={`${textStyle} text-lg font-bold`}>{title}</Text>
      <TextInput
        {...otherProps}
        value={value}
        onChangeText={onChangeText}
        className={`${inputStyles} p-3 px-4 bg-white rounded-full shadow-sm`}
      />
    </View>
  );
}

export default FormWithTitle;
