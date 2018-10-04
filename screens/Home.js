import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import Launches from '../components/Launches';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Go to test screen!"
          onPress={() => this.props.navigation.push('Rockets')}
        />
        <ScrollView>
          <Launches/>
        </ScrollView>
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