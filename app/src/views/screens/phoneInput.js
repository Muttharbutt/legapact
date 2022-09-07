import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import STYLES from "../../style";
import COLORS from "../../consts/color";

const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleInputs = () => {
    if (!phoneNumber) {
      setErrors("Please Enter Your Phone Number");
      setPhoneNumber("");
    } else {
      setIsValid(true);
      setErrors("");
    }
  };
  const Continue = () => {
    if (isValid) {
      navigation.navigate("otpInput", { phoneNumber: phoneNumber });
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={inner.input}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={inner.mainContainer}>
          <Text style={STYLES.heading}>Let's get started</Text>
          <Text style={STYLES.inputLabel}>
            please enter your mobile number{" "}
          </Text>

          <View style={STYLES.inputContainer}>
            <Icon name="phone" style={STYLES.icons} size={15} />

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

          <Text style={inner.error}>{error}</Text>
          <TouchableOpacity style={inner.button} onPress={Continue}>
            <Text>Continue</Text>
            <Icon name="arrow-right" style={STYLES.buttonRightIcon} size={20} />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PhoneNumber;

const inner = StyleSheet.create({
  input: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    height: "100%",
    paddingTop: 30,
    backgroundColor: COLORS.primary,
  },
  button: {
    flexDirection: "row",
    marginTop: 270,
    width: 300,
    borderColor: "#fff",
    borderRadius: 10,
    height: 40,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    padding: 10,
    marginRight: 30,
    borderColor: "red",
    marginLeft: 30,
  },
});
