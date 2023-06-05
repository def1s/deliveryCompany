import { StyleSheet, View, Text, Image } from "react-native";

import CheckBox from "../checkBox/checkBox";

const OrderList = function({firm, pack, source, destination, cost, check, id, onCheck}) {

	return (
		<View style={styles.container}>

			<View style={styles.firmaImageWrapper}>
				<Image source={{url: firm}} style={styles.firmaImage} resizeMode="contain"/>
			</View>
			
			<View style={styles.pack}>
				<Text style={styles.packText}>{pack}</Text>
			</View>
			<View style={styles.source}>
				<Text style={styles.sourceText}>{source}</Text>
			</View>
			<View style={styles.destination}>
				<Text style={styles.destinationText}>{destination}</Text>
			</View>
			<View style={styles.cost}>
				<Text style={styles.costCount}>{cost + '$'}</Text>
			</View>
			
			<CheckBox key={id} check={check} onCheck={onCheck}/>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '95%',
		height: 80,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderColor: 'rgba(150, 150, 150, 0)',
		borderWidth: 1,
		marginTop: 10,
		marginLeft: 10,

		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.4,
		shadowRadius: 4,
	},
	firmaImageWrapper: {
		width: 40,
		height: 50
	},
	firmaImage: {
		width: 40,
		height: 50
	},
	pack: {
		width: 20
	},
	packText: {
		fontSize: 26,
		textAlign: 'center'
	},
	source: {
		width: 60
	},
	sourceText: {
		fontSize: 22,
		textAlign: 'center'
	},
	destination: {
		width: 60
	},
	destinationText: {
		fontSize: 22,
		textAlign: 'center'
	},
	cost: {
		width: 60
	},
	costCount: {
		fontSize: 22,
		textAlign: 'center'
	}
})

export default OrderList;