import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { StyleSheet, Text, Button, Image, View } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      onSkip={() => navigation.replace("RootStack")}
      onDone={() => navigation.navigate("RootStack")}
      containerStyles={styles.container}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/onboarding-img1.png")} />,
          title: "Investments",
          subtitle:
            "Trusted to help guide you make investments that will profit you",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/onboarding-img2.png")} />,
          title: "Growthedge Academy",
          subtitle: "Gain access to relevant knowledge for life and success",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../assets/onboarding-img3.png")} />,
          title: "Become a member",
          subtitle: "Get started now to get discounts on our service",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    paddingHorizontal: 10,
  },
});
