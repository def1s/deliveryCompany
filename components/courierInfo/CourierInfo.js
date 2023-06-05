import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CourierInfo = function({username, doesHeHaveATrack, totalUser, onLogout}) {

	return (
		<View style={styles.container}>

			<Text style={styles.mainText}>Hello, <Text style={styles.boldText}>{username}</Text>!</Text>
			<Text style={styles.normalText}>You can deliver: <Text style={styles.boldText}>{doesHeHaveATrack ? 'S, M, L' : 'S, M'}</Text></Text>
			<Text style={styles.normalText}>Total: <Text style={styles.boldText}>{totalUser + '$'}</Text></Text>

			<TouchableOpacity style={styles.logout}>
				<Text style={styles.logoutText} onPress={onLogout}>LOG OUT</Text>
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		minHeight: 50,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.4,
		shadowRadius: 4,
		marginLeft: 10,
		marginRight: 10
	},
	mainText: {
		fontSize: 30
	},
	boldText: {
		fontWeight: 700
	},
	normalText: {
		fontSize: 24
	},
	logout: {
		position: 'absolute',
		right: 10,
		bottom: 10,
		height: 25,
		width: 100,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	logoutText: {
		color: '#fff'
	}
});

export default CourierInfo;