import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import List from '../pages/List';
import Form from '../pages/Form';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  )
}

export default Router;
