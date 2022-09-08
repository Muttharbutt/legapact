import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import STYLES from "../../../style";
import COLORS from "../../../consts/color";

const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);

  // validation Function
  const handleInputs = () => {
    if (!phoneNumber) {
      setErrors("Please Enter Your Phone Number");
      setPhoneNumber("");
    } else {
      setIsValid(true);
      setErrors("");
    }
  };

  // Main Function
  const Continue = () => {
    handleInputs;
    if (isValid) {
      navigation.navigate("otpInput", { phoneNumber: phoneNumber });
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={STYLES.wholeContainer}
    >
      <ImageBackground
        source={require("../../assets/img/RegistrationBackground.png")}
        reSizeMode="strech"
        style={STYLES.background}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={STYLES.mainContainer}>
            <View>
              <Text style={STYLES.heading}>Let's get started</Text>
              <Text style={STYLES.inputLabel}>
                please enter your mobile number{" "}
              </Text>
            </View>

            <View>
              <View style={STYLES.inputContainer}>
                <Icon name="phone" style={STYLES.icons} size={20} />

                <TextInput
                  style={STYLES.inputFields}
                  placeholder="033355105430"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  keyboardAppearance="light"
                  dataDetectorTypes="phoneNumber"
                  maxLength={11}
                  value={phoneNumber}
                  onEndEditing={handleInputs}
                  onChangeText={(value) => {
                    setPhoneNumber(value);
                  }}
                />
              </View>
              <Text style={STYLES.error}>{error}</Text>
            </View>
            <View>
              <TouchableOpacity style={inner.button} onPress={Continue}>
                <Text style={STYLES.buttonText}>Continue</Text>
                <Icon name="arrow-right" size={30} color={COLORS.secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                style={inner.button}
                onPress={() => {
                  navigation.navigate("signIn");
                }}
              >
                <Text style={STYLES.buttonText}>Sign In</Text>
                <Icon name="arrow-right" size={30} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default PhoneNumber;

const inner = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderColor: COLORS.primary,
    borderRadius: 30,
    marginLeft: 20,
    margin: 10,
    height: 50,
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
  },
});
