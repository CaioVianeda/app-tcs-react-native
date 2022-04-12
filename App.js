import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/View/Home'
import Login from './src/View/Login';
import Scheduling from './src/View/Scheduling';
import Schedules from './src/View/Schedules'

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducers from './src/redux/reducers';
const store = createStore(Reducers)

const Stack = createStackNavigator()

export default function App() {

  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Schedules"
            component={Schedules}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Scheduling"
            component={Scheduling}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  )

}

