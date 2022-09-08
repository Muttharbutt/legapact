import PhoneNumber from "./app/src/views/screens/registrationScreens/phoneInput";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtpInput from "./app/src/views/screens/registrationScreens/optInput";
import PersonalDetails from "./app/src/views/screens/registrationScreens/personalDetails";
import PinSetUp from "./app/src/views/screens/registrationScreens/pinSetup";
import SignIn from "./app/src/views/screens/signIn.js/signIn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="phoneNumber" component={PhoneNumber} />
        <Stack.Screen name="otpInput" component={OtpInput} />
        <Stack.Screen name="pinSetUp" component={PinSetUp} />
        <Stack.Screen name="personalDetails" component={PersonalDetails} />
        <Stack.Screen name="signIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
