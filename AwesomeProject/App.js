import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View,StyleSheet } from 'react-native'
import TextText from './TextText'

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter:0
    }
  } 

  render() {
    return (
      <View>
        <TextText textCounter = {this.state.counter} />
        {/* <TextInput value={this.state.text} onChangeText={(e)=>{this.setState({text:e})}}></TextInput> */}
        <TouchableOpacity style={styles.button} onPress={() => {this.setState({counter:this.state.counter+1})}}><Text>Increment++</Text></TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10
  },
})

export default App
