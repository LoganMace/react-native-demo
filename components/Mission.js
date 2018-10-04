import React from 'react';
import { Text, View, Button, Image, ScrollView, StyleSheet } from 'react-native';

const Mission = (props) => {
  const {launch} = props;
  return (
    <View key={launch.flight_number} style={{alignItems: 'center', marginBottom: 25}}>
      <Text style={styles.bold}>{launch.mission_name}</Text>
      <View style={styles.image}>
        <Image source={{uri: launch.links.mission_patch}} style={styles.image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350, 
    height: 350, 
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.75
  },
  bold: {
    fontSize: 20, 
    fontWeight: "bold"
  }
});

export default Mission;