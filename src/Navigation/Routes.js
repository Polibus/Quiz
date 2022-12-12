import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, ResultScreen, Test } from '../Screens';
const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Result" component={ResultScreen} />
        <Drawer.Screen name="Test" component={Test} />
      </Drawer.Navigator>
     </NavigationContainer>
  );
}

export default Routes