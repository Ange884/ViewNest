import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../components/landing.jsx';
import WelcomeScreen from '../components/welcome.jsx';
import RegisterScreen from '../components/Register.jsx';
import confirmOTPScreen from '../components/confirmOTP.jsx';
import VerifyOTPScreen from '../components/verifyOTP.jsx';
import Register2Screen from '../components/Register2.jsx';
import LoginScreen from "../components/login.jsx";
const Stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    
          <Stack.Navigator initialRouteName="landing"
           screenOptions={{headerShown:false,}}>
            <Stack.Screen name="landing" component={LandingScreen} />
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="confirmOTP" component={confirmOTPScreen} />
            <Stack.Screen name="verifyOTP" component={VerifyOTPScreen} />
            <Stack.Screen name="Register2" component={Register2Screen} />
            <Stack.Screen name="login" component={LoginScreen} />
          </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#000"
  },
});
