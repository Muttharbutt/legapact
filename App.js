import PhoneNumber from "./app/src/views/screens/phoneInput";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtpInput from "./app/src/views/screens/optInput";
import PersonalDetails from "./app/src/views/screens/personalDetails";
import PinSetUp from "./app/src/views/screens/pinSetup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="phoneNumber" component={PhoneNumber} />
        <Stack.Screen name="otpInput" component={OtpInput} />
        <Stack.Screen name="pinSetUp" component={PinSetUp} />
        <Stack.Screen name="personalDetails" component={PersonalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
