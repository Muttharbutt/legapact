import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const STYLES = StyleSheet.create({
  background: { flex: 1, resizeMode: "contain" },
  wholeContainer: {
    flex: 1,
  },
  mainContainer: {
    borderRadius: 20,
    flex: 1,
    height: "100%",
    margin: 20,
    marginTop: 40,
    backgroundColor: COLORS.secondary,
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    borderColor: COLORS.primary,
    borderRadius: 10,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
  },
  inputFields: {
    paddingLeft: 20,
  },
  icons: {
    margin: 4,
  },
  heading: {
    marginTop: 50,
    fontSize: 24,
    color: COLORS.primary,
    paddingLeft: 30,
  },
  inputLabel: {
    color: COLORS.primary,
    fontSize: 15,
    marginTop: 10,
    paddingLeft: 30,
  },
  button: {
    flexDirection: "row",
    borderColor: COLORS.primary,
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    margin: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
  },

  buttonText: {
    fontSize: 15,
    color: COLORS.secondary,
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  error: {
    color: "red",
    padding: 10,
    borderColor: "red",
    marginLeft: 20,
  },
  setPinBanner: {
    marginTop: 20,
    alignSelf: "center",
  },
  avoid: {
    flex: 1,
  },
});

export default STYLES;
