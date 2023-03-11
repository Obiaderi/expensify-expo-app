import { View } from "react-native";

function ScreenWrapper({ children }) {
  return <View className="mt-[40]">{children}</View>;
}

export default ScreenWrapper;
