// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom imports
import HomeScreen from "../screens/HomeScreen";
import AddTripScreen from "../screens/AddTripScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="Signin"
          component={SigninScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddTrip"
          component={AddTripScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddExpense"
          component={AddExpenseScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TripExpenses"
          component={TripExpensesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
