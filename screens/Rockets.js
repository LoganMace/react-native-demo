import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

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
    console.log(this.state);
    const rockets = this.state.rockets.map(rocket => {
      const images = rocket.flickr_images.map((image, i) => {
        return (
          <Image key={i} source={{uri: image}} style={{width: 350, height: 350, margin: 5}}/>
        )
      })
      return (
        <View style={{alignItems: 'center', backgroundColor: 'black'}} key={rocket.rocketid}>
          <Text style={styles.bold}>{rocket.name}</Text>
          {images}
          <Text style={{margin: 25, marginTop: 0, color: 'white'}}>{rocket.description}</Text>
        </View>
      )
    })

    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Text style={styles.bold}>Rockets: </Text>
        <ScrollView>
          {rockets}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontSize: 20, 
    fontWeight: "bold",
    color: "white"
  },
});