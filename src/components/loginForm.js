import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, navigator } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const Routes = StackNavigator({
  LevelOne: { screen: LevelOne },
});
export default class LoginForm extends Component {
	render() {
        const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<TextInput 
        placeholder = "username"
        style={styles.input} />
				<Button  
        title="Play" 
        color="#84153d"
        onPress={() =>
          navigate('LevelOne', { })
        }
        /> 
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 40,
  }
});
