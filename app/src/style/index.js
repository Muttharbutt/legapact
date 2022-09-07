import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const STYLES = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: 300,
    borderColor: "#fff",
    borderRadius: 10,
    height: 40,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  inputFields: {
    paddingLeft: 20,
  },
  heading: {
    paddingTop: 50,
    fontSize: 24,
    color: COLORS.heading,
    flex: 0,
    paddingLeft: 30,
  },
  inputLabel: {
    color: "#fff",
    fontSize: 15,
    marginTop: 10,
    paddingLeft: 30,
    marginBottom: 200,
  },
  icons: {
    margin: 2,
  },
  button: {
    flexDirection: "row",
    marginTop: 300,
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

export default STYLES;
