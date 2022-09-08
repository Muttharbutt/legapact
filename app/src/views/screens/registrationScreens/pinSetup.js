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
  Image,
} from "react-native";
import STYLES from "../../../style";
import { useRoute } from "@react-navigation/native";
import COLORS from "../../../consts/color";

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
      <ImageBackground
        source={require("../../assets/img/RegistrationBackground.png")}
        reSizeMode="strech"
        style={STYLES.background}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={STYLES.mainContainer}>
            <View>
              <Image
                style={STYLES.setPinBanner}
                source={require("../../assets/img/setPinBanner.png")}
              />
              <Text style={STYLES.heading}>
                Great, let's Setup your LegaPact Pin
              </Text>
              <Text style={STYLES.inputLabel}>
                This will be your 6-digit code that you will use to log in to
                LegaPact.
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
              <Text style={STYLES.buttonText}>Continue</Text>
              <Icon
                name="arrow-right"
                style={STYLES.buttonRightIcon}
                color={COLORS.secondary}
                size={20}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default PinSetUp;
