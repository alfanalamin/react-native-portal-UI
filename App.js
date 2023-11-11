import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Home from './home';
import Button from './components/button';
// import ListScreen from './screens/list';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Camtion IT"
          component={Login}
          options={{ headerTitle: null }}
        />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="List" component={ListScreen} /> */}
        <Stack.Screen name="Button" component={Button} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
