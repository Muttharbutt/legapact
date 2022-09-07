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
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.input}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.mainContainer}>
          <Text>PhoneNumber : {route.params.phoneNumber}</Text>
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
              onChangeText={(value) => setOtpPin(value)}
            />
          </View>
          <TouchableOpacity
            style={STYLES.button}
            onPress={() =>
              navigation.navigate("pinSetUp", {
                phoneNumber: route.params.phoneNumber,
              })
            }
          >
            <Text>Continue</Text>
            <Icon name="arrow-right" style={STYLES.buttonRightIcon} size={20} />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    height: "100%",
    paddingTop: 30,
    backgroundColor: COLORS.primary,
  },
});
