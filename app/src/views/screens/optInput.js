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
} from "react-native";
import STYLES from "../../style";

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
      style={STYLES.wholeContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={STYLES.mainContainer}>
          <View>
            <Text style={STYLES.heading}>Enter verification code</Text>
            <Text style={STYLES.inputLabel}>
              we've sent it your phone number
            </Text>
          </View>
          <View>
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
            <Text style={STYLES.error}>{error}</Text>
          </View>
          <TouchableOpacity style={STYLES.button} onPress={Continue}>
            <Text>Continue</Text>
            <Icon name="arrow-right" style={STYLES.buttonRightIcon} size={20} />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OtpInput;
