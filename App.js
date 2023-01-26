import React, {useState, useEffect} from 'react';
import Signin from './Screens/Signin';
import SignUp from './Screens/SignUp';
import Chores from './Screens/SignedIn/Chores';
import Notice from './Screens/SignedIn/Notice';
import Bills from './Screens/SignedIn/Bills';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GSystem from './Components/Gsystem';
import Home from './Screens/Home';
import ShoppingList from './Screens/SignedIn/ShoppingList';

export default function App() {
 
  const Stack = createNativeStackNavigator();
  
 /*
 Return contains the stack which has all the accessible js files/ screens for the app.
 Using the react native stack dependancy I was able to do this and build out my app from here.
 */
  return(
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="SignIn" component={Signin} options={{headerShown:false}}/>
<Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
  <Stack.Screen name="ShoppingList" component={ShoppingList} options={{headerShown:false}}/>
<Stack.Screen name="Notice" component={Notice} options={{headerShown:false}}/>
<Stack.Screen name="Bills" component={Bills} options={{headerShown:false}}/> 
  <Stack.Screen name="Chores" component={Chores} options={{headerShown:false}}/>
  <Stack.Screen name="GSystem" component={GSystem} options={{headerShown:false}}/>
  <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
  </Stack.Navigator>
</NavigationContainer>
  );
}
   







