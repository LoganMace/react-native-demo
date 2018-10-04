import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import Mission from './Mission';

export default class Launches extends React.Component {

  constructor(){
    super();
    this.state = {
      launches: [],
      modalVisible: false,
      selected: {}
    }
  }

  componentDidMount(){
    fetch('https://api.spacexdata.com/v2/launches')
      .then(response => response.json())
      .then(resJson => {
        console.log('resJson: ', resJson);
        this.setState({
          launches: resJson
        })
      });
  }

  render() {
    console.log(this.state)
    const {selected} = this.state;

    const launches = this.state.launches.map(launch => {
      return(
        <TouchableOpacity key={launch.flight_number} onPress={() => {
          this.setState({
            modalVisible: !this.state.modalVisible,
            selected: launch
          });
        }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 72}}>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>

                <View style={{alignItems: "center"}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>{selected.mission_name}</Text>
                  <Text>{selected.launch_year}</Text>
                  <View style={styles.image}>
                    {selected.links && <Image source={{uri: selected.links.mission_patch}} style={styles.image}/>}
                  </View>
                  <Text style={{marginTop: 25, marginLeft: 10, marginRight: 10, fontSize: 17}}>{selected.details}</Text>
                </View>

              </View>
            </View>
          </Modal>

          <Mission 
            style={{alignItems: 'center', marginBottom: 10}}
            launch={launch}
          />
        </TouchableOpacity>
      )
    })

    return (
      <View>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Missions: </Text>
        {launches}
      </View>
    );
  }
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
  }
});

