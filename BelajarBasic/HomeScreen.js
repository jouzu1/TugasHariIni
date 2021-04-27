import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginForm from './LoginForm';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                {/* <Text>{this.props.nama}</Text> */}
                {/* <Text>Pergi Ke Tampilan Login.</Text> */}
            
                <Text>Selamat Datang Jouzu</Text>
            </View>
        );
    }
}

export default HomeScreen;
// ...