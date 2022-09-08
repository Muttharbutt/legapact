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
  Alert,
} from "react-native";
import STYLES from "../../../style";
import { useRoute } from "@react-navigation/native";
import COLORS from "../../../consts/color";

const SignIn = ({ navigation }) => {
  const [cnic, setCnic] = useState("");
  const [pin, setPin] = useState("");
  const [error, setErrors] = useState("");
  const [isValid, setIsValid] = useState("");

  const handleInputs = () => {
    if (!pin || !cnic) {
      setErrors("Please Enter Your Pin");
      setIsValid(false);
    } else {
      setIsValid(true);
      setErrors("");
    }
  };
  const SignIn = () => {
    handleInputs;
    if (isValid) {
      Alert.alert("Signed In");
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
                Welcome Back, Assalam Ul Alaikkum!
              </Text>
              <Text style={STYLES.inputLabel}>Let's create an agreement</Text>
            </View>
            <View>
              <View style={STYLES.inputContainer}>
                <TextInput
                  style={STYLES.inputFields}
                  placeholder="Enter CNIC"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  keyboardAppearance="light"
                  dataDetectorTypes="phoneNumber"
                  maxLength={13}
                  onEndEditing={handleInputs}
                  value={cnic}
                  onChangeText={(value) => setCnic(value)}
                />
              </View>
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
              <Text style={STYLES.error}>{error}</Text>
            </View>
            <TouchableOpacity style={STYLES.button} onPress={SignIn}>
              <Text style={STYLES.buttonText}>Sign In</Text>
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

export default SignIn;
