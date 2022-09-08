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

const PinSetUp = ({ navigation }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const route = useRoute();
  const [error, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputs = () => {
    if (!pin || !confirmPin) {
      setErrors("Please Enter Your Pin");
      setIsValid(false);
    } else {
      if (pin !== confirmPin) {
        setErrors("Both Pins are not matching");
        setIsValid(false);
      } else {
        setIsValid(true);
        setErrors("");
      }
    }
  };
  const Continue = () => {
    handleInputs;
    if (isValid) {
      navigation.navigate("personalDetails", {
        phoneNumber: route.params.phoneNumber,
        pin: pin,
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
            <Text style={STYLES.heading}>Setup Your Pin</Text>
            <Text style={STYLES.inputLabel}>Kindly setup 6 Digit Pin</Text>
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
                maxLength={6}
                onEndEditing={handleInputs}
                value={pin}
                onChangeText={(value) => setPin(value)}
                secureTextEntry={true}
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
                onEndEditing={handleInputs}
                value={confirmPin}
                onChangeText={(value) => setConfirmPin(value)}
                secureTextEntry={true}
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

export default PinSetUp;
