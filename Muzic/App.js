import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const TabNavigator = createMaterialBottomTabNavigator() {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: (tabinfo) => (
        <Ionicons 
          name="md-home"
          size={tabinfo.focused ? 26:20}
          color={tabinfo.tintColor}
        />
      )
    }
  }
}

export default function App() {
  return (
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
