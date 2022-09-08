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
          <TouchableOpacity style={STYLES.button} onPress={Continue}>
            <Text style={STYLES.buttonText}>Continue</Text>
            <Icon name="arrow-right" size={30} />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PhoneNumber;
