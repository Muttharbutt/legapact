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
      style={inner.input}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={inner.mainContainer}>
          <Text style={STYLES.heading}>Personal Deatils</Text>
          <Text style={STYLES.inputLabel}>Kindly fill in the Information</Text>
          <Text style={inner.error}>{error}</Text>

          <View style={inner.inputContainer}>
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

          <View style={inner.inputContainer}>
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

          <View style={inner.inputContainer}>
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

          <View style={inner.inputContainer}>
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

          <View style={inner.inputContainer}>
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

          <TouchableOpacity style={inner.button} onPress={Register}>
            <Text>Register</Text>
            <Icon name="arrow-right" style={STYLES.buttonRightIcon} size={20} />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PersonalDetails;

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
  inputContainer: {
    flexDirection: "row",
    width: 300,
    borderColor: "#fff",
    borderRadius: 10,
    height: 40,
    marginLeft: 30,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
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
    marginTop: 70,
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
