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

const PersonalDetails = (navigation) => {
  const [fullName, setFullName] = useState("");
  const [cnic, setCnic] = useState("");
  const [district, setDistrict] = useState("");
  const [tehsil, setTehsil] = useState("");
  const [address, setAddress] = useState("");

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.input}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.mainContainer}>
          <Text style={STYLES.heading}>Personal Deatils</Text>
          <Text style={STYLES.inputLabel}>Kindly fill in the Information</Text>

          <View style={styles.inputContainer}>
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

          <View style={styles.inputContainer}>
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

          <View style={styles.inputContainer}>
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

          <View style={styles.inputContainer}>
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

          <View style={styles.inputContainer}>
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

          <TouchableOpacity style={styles.button}>
            <Text>Register</Text>
            <Icon name="arrow-right" style={STYLES.buttonRightIcon} size={20} />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PersonalDetails;

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
  button: {
    flexDirection: "row",
    marginTop: 100,
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
