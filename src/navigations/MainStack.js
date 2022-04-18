import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBottomNavigation from './TabsBottomNavigation';
import Home from '../screens/Home';
import WareHouse from '../screens/WareHouse';
import ImportBy from '../screens/ImportBy';
import ProductionCommand from '../screens/ProductionCommand';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WareHouse" component={WareHouse} />
      <Stack.Screen name="ImportBy" component={ImportBy} />
      <Stack.Screen name="ProductionCommand" component={ProductionCommand} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default MainStack;
