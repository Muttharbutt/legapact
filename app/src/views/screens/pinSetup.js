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

const PinSetUp = ({ navigation }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const route = useRoute();

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.input}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.mainContainer}>
          <Text style={STYLES.heading}>
            {route.params.phoneNumber}Setup Your Pin
          </Text>
          <Text style={STYLES.inputLabel}>Kindly setup 6 Digit Pin</Text>

          <View style={STYLES.inputContainer}>
            <TextInput
              style={STYLES.inputFields}
              placeholder="Enter Pin"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              keyboardAppearance="light"
              dataDetectorTypes="phoneNumber"
              maxLength={6}
              value={pin}
              onChangeText={(value) => setPin(value)}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              style={STYLES.inputFields}
              placeholder="Enter Pin Again"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              keyboardAppearance="light"
              dataDetectorTypes="phoneNumber"
              maxLength={6}
              value={confirmPin}
              onChangeText={(value) => setConfirmPin(value)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("personalDetails")}
          >
            <Text>Continue</Text>
            <Icon name="arrow-right" style={STYLES.buttonRightIcon} size={20} />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PinSetUp;

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
  button: {
    flexDirection: "row",
    marginTop: 200,
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
