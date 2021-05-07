import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ComponentSreen from './src/Screens/ComponentScreen';
import ListScreen from './src/Screens/ListScreen'
import ImageScreen from './src/Screens/ImageScreen'
import CounterScreen from './src/Screens/CounterScreen'
import ColorScreen from './src/Screens/ColorScreen'

const Stack = createStackNavigator();

const  App = ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={({navigation})=>({
            title: 'Home Screen'
          })}
        /> 
        <Stack.Screen 
          name="Component" 
          component={ComponentSreen}
          options={({navigation})=>({
            title: 'Component Screen'
          })}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={({navigation})=>({
            title: 'List Screen'
          })}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={({navigation})=>({
            title: 'Image Screen'
          })}
        />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={({navigation})=>({
            title: 'Counter Screen'
          })}
        />
        <Stack.Screen
          name="Color"
          component={ColorScreen}
          options={({navigation})=>({
            title: 'Color Screen'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
