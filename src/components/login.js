import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  navigator,
} from 'react-native';
import LoginForm from './loginForm';

export default class Login extends Component {
  
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/splashScreenCar.png')}/>
       </View>
        <View style={styles.formContainer}>
         <LoginForm/>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8B8B8',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  formContainer: {

  },
  logo: {
    width: 250,
    height: 150,
  }
});
