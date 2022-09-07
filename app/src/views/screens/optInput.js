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
} from "react-native";
import STYLES from "../../style";
import COLORS from "../../consts/color";
import { useRoute } from "@react-navigation/native";

const OtpInput = ({ navigation }) => {
  const [otpPin, setOtpPin] = useState("");
  const route = useRoute();
  const [error, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleInputs = () => {
    if (!otpPin) {
      setErrors("Please Enter OTP Code");
      setOtpPin("");
    } else {
      setIsValid(true);
      setErrors("");
    }
  };
  const Continue = () => {
    handleInputs;
    if (isValid) {
      navigation.navigate("pinSetUp", {
        phoneNumber: route.params.phoneNumber,
      });
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
          <Text style={STYLES.heading}>Enter verification code</Text>
          <Text style={STYLES.inputLabel}>we've sent it your phone number</Text>

          <View style={STYLES.inputContainer}>
            <TextInput
              style={STYLES.inputFields}
              placeholder="Enter Pin"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              keyboardAppearance="light"
              dataDetectorTypes="phoneNumber"
              maxLength={4}
              value={otpPin}
              onEndEditing={handleInputs}
              onChangeText={(value) => setOtpPin(value)}
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

export default OtpInput;

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
  error: {
    color: "red",
    padding: 10,
    marginRight: 30,
    borderColor: "red",
    marginLeft: 30,
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
});
