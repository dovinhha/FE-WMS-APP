import React from 'react';
import Login from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      headerMode="none"
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
