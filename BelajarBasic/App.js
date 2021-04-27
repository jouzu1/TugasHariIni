// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import LoginForm from "./LoginForm"

// export class App extends Component {
//     render() {
//         return (
//             <View>
//                 <LoginForm nama="Jouzu"/>
//             </View>
//         )
//     }
// }

// export default App
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginForm from './LoginForm';

const Stack = createStackNavigator();



export class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="LoginForm"
            component={LoginForm}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;