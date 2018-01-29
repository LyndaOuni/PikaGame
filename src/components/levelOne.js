import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class LevelOneScreen extends Component {

	render() {
		return (
	
				<View style={styles.container}>
					<Image source={require('../images/routeCar.png')} />
				</View>
		
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
