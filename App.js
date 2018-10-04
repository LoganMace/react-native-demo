import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Rockets from './screens/Rockets';
// import Launches from './components/Launches';

export default class App extends React.Component {
  render() {
    return (
      <AppNav/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginTop: 50
//   },
// });

const AppNav = createStackNavigator({
  Home: Home,
  Rockets: Rockets,
})