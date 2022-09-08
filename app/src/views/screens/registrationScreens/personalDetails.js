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
  Alert,
  ImageBackground,
} from "react-native";
import STYLES from "../../../style";
import COLORS from "../../../consts/color";
import { useRoute } from "@react-navigation/native";

const PersonalDetails = (navigation) => {
  const [fullName, setFullName] = useState("");
  const [cnic, setCnic] = useState("");
  const [district, setDistrict] = useState("");
  const [tehsil, setTehsil] = useState("");
  const [address, setAddress] = useState("");
  // get phoneNumber by route.params.phoneNumber
  // get pin by route.params.pin

  const [error, setErrors] = useState("");

  const Register = () => {
    if (!fullName || !cnic || !district || !tehsil || !address) {
      setErrors("Please Fill All Fields");
    } else {
      Alert.alert("Registered");
      setErrors("");
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
              <Text style={STYLES.heading}>Personal Deatils</Text>
              <Text style={STYLES.inputLabel}>
                Kindly fill in the Information
              </Text>
              <Text style={STYLES.error}>{error}</Text>
            </View>
            <View>
              <View style={STYLES.inputContainer}>
                <Icon name="person" style={STYLES.icons} size={15} />
                <TextInput
                  style={STYLES.inputFields}
                  placeholder="Enter your name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardAppearance="light"
                  value={fullName}
                  onChangeText={(value) => setFullName(value)}
                />
              </View>

              <View style={STYLES.inputContainer}>
                <Icon name="person" style={STYLES.icons} size={15} />
                <TextInput
                  style={STYLES.inputFields}
                  placeholder="xxxxxxxxxxxxx"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardAppearance="light"
                  keyboardType="numeric"
                  maxLength={13}
                  value={cnic}
                  onChangeText={(value) => setCnic(value)}
                />
              </View>

              <View style={STYLES.inputContainer}>
                <Icon name="person" style={STYLES.icons} size={15} />
                <TextInput
                  style={STYLES.inputFields}
                  placeholder="Enter District"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardAppearance="light"
                  value={district}
                  onChangeText={(value) => setDistrict(value)}
                />
              </View>

              <View style={STYLES.inputContainer}>
                <Icon name="person" style={STYLES.icons} size={15} />
                <TextInput
                  style={STYLES.inputFields}
                  placeholder="Enter your Tehsil"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardAppearance="light"
                  value={tehsil}
                  onChangeText={(value) => setTehsil(value)}
                />
              </View>

              <View style={STYLES.inputContainer}>
                <Icon name="person" style={STYLES.icons} size={15} />
                <TextInput
                  style={STYLES.inputFields}
                  placeholder="Enter your complete Address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardAppearance="light"
                  value={address}
                  onChangeText={(value) => setAddress(value)}
                />
              </View>
            </View>
            <TouchableOpacity style={STYLES.button} onPress={Register}>
              <Text style={STYLES.buttonText}>Register</Text>
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

export default PersonalDetails;
