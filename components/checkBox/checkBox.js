import {StyleSheet, View, TouchableOpacity } from "react-native";
import { useState } from "react";

function CheckBox({check, onCheck}) {
	return (
		<TouchableOpacity style={styles.checkBoxWrapper} onPress={onCheck}>
				<View style={check ? styles.checkBox : styles.checkBoxHide}></View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	checkBoxWrapper: {
		width: 25,
		height: 25,
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 1,
		padding: 3
	},
	checkBox: {
		backgroundColor: 'black',
		width: 17,
		height: 17
	},
	checkBoxHide: {}
});

export default CheckBox;