// import Expo from "expo";
import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
// import * as THREE from "three";
// import ExpoTHREE from "expo-three";
// const ScreenRecorderManager = require('react-native-screen-recorder'); 

export default class App extends React.Component {
	constructor () {
		super();
		this.scale = new Animated.Value(0);
		this.toScale = 2;
	}
	
	componentDidMount () {
		this.animate(0, this.toScale);

		setTimeout(() => {
			this.startRecording();
		}, 2000);
		
		// setTimeout(() => {
		// 	this.stopRecording();
		// }, 6000);
	}

	startRecording() {
		// ScreenRecorderManager.start();
	}

	stopRecording() {
		// ScreenRecorderManager.stop();
	}

	animate (fromVal, toVal) {
		this.scale.setValue(fromVal);
		Animated.timing(
			this.scale,
			{
				toValue: toVal,
				duration: 1000,
				easing: Easing.linear
			}
		).start(() => {
			if (toVal == this.toScale) {
				this.animate(this.toScale, 0);
			}
			else {
				this.animate(0, this.toScale);
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Animated.View style={{
					transform: [{scaleX: this.scale}, {scaleY: this.scale}]
				}}>
					<Text style={styles.text}>Testing</Text>
				</Animated.View>
			</View>
		);
	}
}
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#f00',
		fontWeight: 'bold',
		fontSize: 40
	},
});
