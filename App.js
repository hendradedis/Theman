/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Button, Text} from 'react-native';

import ListItem from './src/component/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places : [],
  }

  placeNameChangeHandler = val => {
      this.setState({
        placeName: val,
      });
  }

  placeSubmitHandler = () => {
      if(this.state.placeName.trim() === "" ) {
        return;
      }
      this.setState(prevState => {
         return {
           places : prevState.places.concat(prevState.placeName)
         } 
      })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) =>(
      <ListItem key={i} placeName={place}/>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder= "Tulis nama kamu dalam ini"
            value = {this.state.placeName}
            onChangeText = {this.placeNameChangeHandler}
          />
          <Button
            title="add"
            onPress={this.placeSubmitHandler}
          />
        </View>
          <View style={styles.listContainer}>
              <Text>{placesOutput}</Text>  
          </View>  
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent:'flex-start'
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput : {
    width: '70%',
  },
  placeButton : {
    width : '30%'
  },
  listContainer : {
    flexDirection: 'column',
    width: '100%',
  }
});
