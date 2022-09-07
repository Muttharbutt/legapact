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

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.input}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.mainContainer}>
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
              onChangeText={(value) => {
                setPhoneNumber(value);
              }}
            />
          </View>
          <TouchableOpacity
            style={STYLES.button}
            onPress={() =>
              navigation.navigate("otpInput", { phoneNumber: phoneNumber })
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

export default PhoneNumber;

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
