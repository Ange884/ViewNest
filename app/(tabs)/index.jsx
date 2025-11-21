import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
export default function TabOneScreen() {
   console.log("mounted");
  return (
<></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#000"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
