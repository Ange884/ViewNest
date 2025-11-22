import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../../components/landing.jsx';
import WelcomeScreen from '../../components/welcome.jsx';
import RegisterScreen from '../../components/Register.jsx';
const Stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    
          <Stack.Navigator initialRouteName="landing"
           screenOptions={{headerShown:false,}}>
            <Stack.Screen name="landing" component={LandingScreen} />
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
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
