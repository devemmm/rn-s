import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ComponentSreen from './src/Screens/ComponentScreen';
import ListScreen from './src/Screens/ListScreen'
import ImageScreen from './src/Screens/ImageScreen'
import CounterScreen from './src/Screens/CounterScreen'
import ColorScreen from './src/Screens/ColorScreen'
import SquareScreen from './src/Screens/SquareScreen'
import {TextScreen} from './src/Screens/TextScreen'
import {BoxScreen} from './src/Screens/BoxScreen'

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
        <Stack.Screen
          name="Square"
          component={SquareScreen}
          options={({navigation})=>({
            title: 'Square Screen'
          })}
        />
        <Stack.Screen
          name="Text"
          component={TextScreen}
          options={({navigation})=>({
            title: 'Text Screen'
          })}
        />
        <Stack.Screen
          name="Box"
          component={BoxScreen}
          options={({navigation})=>({
            title: 'Box Screen'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
