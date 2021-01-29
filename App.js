import React, { useState, useEffect } from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "./screens/OnboardingScreen";
import RootStackScreens from "./screens/RootStackScreens";
import LoginScreen from "./screens/LoginScreen";

const AppStack = createStackNavigator();

export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alraedyLaunched", "true");
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  if (firstLaunch === null) {
    return null;
  } else if (firstLaunch === true) {
    return (
      <NavigationContainer style={styles.container}>
        <RootStackScreens />
        {/* <AppStack.Navigator headerMode="none">
          <AppStack.Screen
            name="Onboarding"
            component={OnboardingScreen}
          ></AppStack.Screen>
          <AppStack.Screen
            name="RootStack"
            component={RootStackScreens}
          ></AppStack.Screen>
        </AppStack.Navigator> */}
      </NavigationContainer>
    );
  } else {
    return <RootStackScreens />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
