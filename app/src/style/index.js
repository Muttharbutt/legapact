import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const STYLES = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  mainContainer: {
    flex: 1,
    height: "100%",
    paddingTop: 30,
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    width: "80%",
    borderColor: "#fff",
    borderRadius: 10,
    height: 50,
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  inputFields: {
    paddingLeft: 20,
  },
  icons: {
    margin: 4,
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
  },
  button: {
    flexDirection: "row",
    width: "80%",
    borderColor: "#fff",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    margin: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  buttonText: {
    fontSize: 15,
    justifyContent: "flex-start",
  },
  error: {
    color: "red",
    padding: 10,
    marginRight: 30,
    borderColor: "red",
    marginLeft: 30,
  },
});

export default STYLES;
