import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component {
	render() {
		console.log(this.props);
		return (
		
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} source={require('../images/splashScreenCar.png')} />
					</View>

					<View style={styles.containerLogin}>
						<TextInput placeholder="username" style={styles.input} />
						<Button
							title="Play"
							color="#84153d"
							onPress={() => this.props.navigation.navigate('LevelOneScreen')}
						/>
					</View>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#B8B8B8'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},

	logo: {
		width: 250,
		height: 150
	},
	containerLogin: {
		padding: 20
	},
	input: {
		height: 40
	}
});
