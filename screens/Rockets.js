import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

// import Mission from './Mission';

export default class Rockets extends React.Component {

  constructor(){
    super();
    this.state = {
      rockets: []
    }
  }

  componentDidMount(){
    fetch('https://api.spacexdata.com/v2/rockets')
      .then(response => response.json())
      .then(resJson => {
        console.log('resJson: ', resJson);
        this.setState({
          rockets: resJson
        })
      });
  }

  render() {
    console.log(this.state)
    // const {selected} = this.state;
    const rockets = this.state.rockets.map(rocket => {
      return (
        <View style={{alignItems: 'center'}} key={rocket.rocketid}>
          <Text style={styles.bold}>{rocket.name}</Text>
          <Text style={{margin: 25, marginTop: 0}}>{rocket.description}</Text>
        </View>
      )
    })

    return (
      <View>
        <Text style={styles.bold}>Rockets: </Text>
        {rockets}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontSize: 20, 
    fontWeight: "bold"
  },
});