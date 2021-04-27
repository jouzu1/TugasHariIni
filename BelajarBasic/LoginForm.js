import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import HomeScreen from './HomeScreen';

export class LoginForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      default: 'Jouzu'
    }
  }



  handleUsername = (username) => {
    this.setState({ username: username })
  }

  handlePassword = (password) => {
    this.setState({ password: password })
  }

  // info = (username, password) => {
  //   alert(`Username : ${username} dan Password : ${password}`)
  // }
  info = (password) => {
    if(password != 'juaracoding'){
      alert("Password Salah")
    }else{
      this.props.navigation.navigate('HomeScreen')
    }
  }

  render() {
    return (
      <View>
        {/* <Text>Hallo {this.props.nama}</Text> */}
        {/* <Text>
          Hallo {this.state.default}
        </Text> */}
        <Text>Username</Text>
        <TextInput style={style.input} onChangeText={this.handleUsername} />
        <Text>Password</Text>
        <TextInput style={style.input} onChangeText={this.handlePassword} />
        {/* <Button title="Login" onPress={this.onTekan.bind(this,"Tester")}/> */}
        <Button title="Login" style={style.input} onPress={() => this.info(this.state.password)}></Button>
      </View>
    )
  }
}

export default LoginForm;

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})
