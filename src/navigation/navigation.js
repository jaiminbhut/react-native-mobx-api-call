import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Users from '../screens/Users';
import UsersDetails from '../screens/UsersDetails';

const RootStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={'Users'}>
        <RootStack.Screen
          options={{headerShown: false}}
          name={'Users'}
          component={Users}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name={'UsersDetails'}
          component={UsersDetails}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
