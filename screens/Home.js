import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

import Launches from '../components/Launches';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.navigation.push('Rockets')}
        >
          <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 20, marginTop: 30}}>Rockets</Text>
        </TouchableHighlight>
        <Launches/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 50
  },
});