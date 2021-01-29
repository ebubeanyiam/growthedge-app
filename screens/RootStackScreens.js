import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import SplashScreen from "./SplashScreen";

const RootStack = createStackNavigator();

export default function RootStackScreens({ navigation }) {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Signup" component={SignupScreen} />
    </RootStack.Navigator>
  );
}
