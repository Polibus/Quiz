import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, ResultScreen, Test, Score,Name } from '../Screens';
const Drawer = createDrawerNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Name" component={Name} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Result" component={ResultScreen} />
        <Drawer.Screen
            name="Test"
            component={Test}
            options={{unmountOnBlur: true}}
            />
        <Drawer.Screen
            name="Score"
            component={Score}
            options={{unmountOnBlur: true}}
            />
      </Drawer.Navigator>
     </NavigationContainer>
  );
}

export default Routes