import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import LandingScreen from '../../components/landing.jsx';
import { StackRouter } from '@react-navigation/native';
export default function MainScreen() {
  return (
         <LandingScreen />
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
