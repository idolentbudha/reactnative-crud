import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Home from '../components/Home';

const Stack = createStackNavigator();

const RouterComponent = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginForm} options={{ title: 'Login' }} />
          <Stack.Screen name="RegisterForm" component={RegisterForm} options={{title: 'Register User'}} />
          <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RouterComponent;
