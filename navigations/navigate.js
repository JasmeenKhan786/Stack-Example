import React from 'react';
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} options={{title:'Hello'}} />
    </Stack.Navigator>
  );
}

export default MyStack; 