import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import detail from '../Modules/detail';
import home from '../Modules/home';

const AppStack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={home} />
        <AppStack.Screen name="Detail" component={detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
