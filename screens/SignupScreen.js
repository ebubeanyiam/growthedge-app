import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import * as WebBrowser from "expo-web-browser";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export default function SignupScreen({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePassword = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome back</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange && (
            <Feather name="check-circle" color="green" size={20} />
          )}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            <Feather
              name={data.secureTextEntry ? "eye" : "eye-off"}
              color="grey"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            <Feather
              name={data.secureTextEntry ? "eye" : "eye-off"}
              color="grey"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() =>
            WebBrowser.openBrowserAsync("https://growthedgeglobal.com/")
          }
        >
          <View style={styles.button}>
            <Text style={{ color: "#fff" }}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.forgot_pwd}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://growthedgeglobal.com/user_portal/request_password.php"
              )
            }
          >
            <Text style={{ color: "grey" }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.no_account}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: "grey", textDecorationLine: "underline" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.no_account}>
          <Text style={{ color: "grey", fontSize: 11 }}>
            Copyright ©2021 Growthedge All Right Reserved .
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E5065",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#0A3041",
    width: 110,
    flexDirection: "row",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  no_account: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  forgot_pwd: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
});
