import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';

import CourierInfo from './components/courierInfo/CourierInfo';
import OrderList from './components/ordersList/OrdersList';

const App = function() {

	const [currentUser, setCurrentUser] = useState(null);
	const [isLogin, setLogin] = useState(false);
	const [isInit, setInit] = useState(false);
	const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState(null);

	const [orders, setOrders] = useState(
		[{
			firm: 'https://downloader.disk.yandex.ru/preview/16beb91ad1ac6e09ffa4d049e2a216e158cef9ecfca6188b21a54b44e800017f/647d584a/1F5TvKekLfoRjdVu_ETR8_41wR7GE4xYTfjVNcg8r7vyq0bUVvQkXg97Ys_Kfa-it3mKGSqPf6--tl6335Mwpw%3D%3D?uid=0&filename=pngwing.com-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1356x863',
			pack: 'S',
			source: 'MSW',
			destination: 'SPB',
			cost: 199,
			check: false,
			id: 1
		},
		{
			firm: 'https://downloader.disk.yandex.ru/preview/16beb91ad1ac6e09ffa4d049e2a216e158cef9ecfca6188b21a54b44e800017f/647d584a/1F5TvKekLfoRjdVu_ETR8_41wR7GE4xYTfjVNcg8r7vyq0bUVvQkXg97Ys_Kfa-it3mKGSqPf6--tl6335Mwpw%3D%3D?uid=0&filename=pngwing.com-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1356x863',
			pack: 'M',
			source: 'MSW',
			destination: 'KRR',
			cost: 499,
			check: false,
			id: 2
		},
		{
			firm: 'https://downloader.disk.yandex.ru/preview/68c92ebfd99b783b4e3390e2cec4a6334e442f5472018557cee1585154b04c52/647d58b0/33OuCyiJyKzQ_TXoZ77qbXm1yyKExq85HvA_2y6myGa4Tv72vVQXSZSKjgpYW0fIRKXBpD62GUKcJqSgmAVCgA%3D%3D?uid=0&filename=pngwing.com-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
			pack: 'S',
			source: 'MSW',
			destination: 'NYK',
			cost: 99,
			check: false,
			id: 3
		},
		{
			firm: 'https://downloader.disk.yandex.ru/preview/16beb91ad1ac6e09ffa4d049e2a216e158cef9ecfca6188b21a54b44e800017f/647d584a/1F5TvKekLfoRjdVu_ETR8_41wR7GE4xYTfjVNcg8r7vyq0bUVvQkXg97Ys_Kfa-it3mKGSqPf6--tl6335Mwpw%3D%3D?uid=0&filename=pngwing.com-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1356x863',
			pack: 'L',
			source: 'MSW',
			destination: 'KRR',
			cost: 699,
			check: false,
			id: 4
		},
		{
			firm: 'https://downloader.disk.yandex.ru/preview/16beb91ad1ac6e09ffa4d049e2a216e158cef9ecfca6188b21a54b44e800017f/647d584a/1F5TvKekLfoRjdVu_ETR8_41wR7GE4xYTfjVNcg8r7vyq0bUVvQkXg97Ys_Kfa-it3mKGSqPf6--tl6335Mwpw%3D%3D?uid=0&filename=pngwing.com-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1356x863',
			pack: 'S',
			source: 'MSW',
			destination: 'SPB',
			cost: 199,
			check: false,
			id: 5
		},
		{
			firm: 'https://downloader.disk.yandex.ru/preview/16beb91ad1ac6e09ffa4d049e2a216e158cef9ecfca6188b21a54b44e800017f/647d584a/1F5TvKekLfoRjdVu_ETR8_41wR7GE4xYTfjVNcg8r7vyq0bUVvQkXg97Ys_Kfa-it3mKGSqPf6--tl6335Mwpw%3D%3D?uid=0&filename=pngwing.com-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1356x863',
			pack: 'M',
			source: 'MSW',
			destination: 'KRR',
			cost: 499,
			check: false,
			id: 6
		},
		{
			firm: 'https://downloader.disk.yandex.ru/preview/68c92ebfd99b783b4e3390e2cec4a6334e442f5472018557cee1585154b04c52/647d58b0/33OuCyiJyKzQ_TXoZ77qbXm1yyKExq85HvA_2y6myGa4Tv72vVQXSZSKjgpYW0fIRKXBpD62GUKcJqSgmAVCgA%3D%3D?uid=0&filename=pngwing.com-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
			pack: 'S',
			source: 'MSW',
			destination: 'NYK',
			cost: 99,
			check: false,
			id: 7
		},
		{
			firm: 'https://downloader.disk.yandex.ru/preview/16beb91ad1ac6e09ffa4d049e2a216e158cef9ecfca6188b21a54b44e800017f/647d584a/1F5TvKekLfoRjdVu_ETR8_41wR7GE4xYTfjVNcg8r7vyq0bUVvQkXg97Ys_Kfa-it3mKGSqPf6--tl6335Mwpw%3D%3D?uid=0&filename=pngwing.com-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1356x863',
			pack: 'L',
			source: 'MSW',
			destination: 'KRR',
			cost: 699,
			check: false,
			id: 8
		}]
	);

	const [users, setUsers] = useState(
		[
			{
				username: 'Daniil',
				password: 1234,
				doesHeHaveATrack: false,
				currentOrders: [],
				total: 0,
				id: 1
			},
			{
				username: 'Lesha',
				password: 4321,
				doesHeHaveATrack: true,
				currentOrders: [],
				total: 0,
				id: 2
			}
		]
	);

	const [totalUser, setTotalUser] = useState([{}]);

	onReady = () => {
		let count = 0;
		const currentOrders = orders.filter(item => {
			if (item.check) {
				count += item.cost;
			}
			return !item.check;
		});
		const newTotalList = [];
		for (let i = 0; i < totalUser.length; i++) {
			if (i === currentUser) {
				newTotalList.push({userId: currentUser, total: totalUser[i].total + count})
			} else {
				newTotalList.push(totalUser[i]);
			}
		}
		setTotalUser(newTotalList);
		setOrders(currentOrders);
	};

	onCancel = () => {
		const currentOrders = orders.map(item => {
			if (item.check) item.check = !item.check;
			return item;
		});
		setOrders(currentOrders);
	};

	onCheck = (id) => {
		for (let i = 0; i < orders.length; i++) {
			if (orders[i].id === id) {
				if (orders[i].pack === 'L' && !users[currentUser].doesHeHaveATrack) {
					console.log('L');
					alert('You cant take this order!');
				} else {
					orders[i].check = !orders[i].check;
				}
			}
		}
		const currentOrders = [...orders]; //не рендерилось, потому что передавал ссылку на тот же массив
		setOrders(currentOrders);
	}

	onLogin = () => {
		for (let i = 0; i < users.length; i++) {
			if (users[i].username === loginUsername && users[i].password == loginPassword) {
				setCurrentUser(i);
				setLogin(true);
				setLoginUsername('');
				setLoginPassword('');
			}
		}
	}

	onLogout = () => {
		setLogin(false);
	}

	if (!isInit) {
		const totalList = [{}, {}]; //добавлять пустой объект при добавлении нового пользователя!!! (исправить)
		for (let i = 0; i < users.length; i++) {
			totalList[i].userId = users[i].id;
			totalList[i].total = users[i].total;
			setTotalUser(totalList);
		}
		setInit(true);
	}


	if (isLogin) {
		return (
			<SafeAreaView style={styles.container}>
	
				<CourierInfo {...users[currentUser]} totalUser={totalUser[currentUser].total} onLogout={onLogout}/>
	
				<FlatList contentContainerStyle={{ paddingBottom: 60 }}  data={orders} renderItem={({item}) => ( //юзаю флетлист для того, чтобы нормально передавался id!!!!!!!
						<OrderList {...item} onCheck={() => onCheck(item.id)}/>
					)}
				/>
	
				<View style={styles.btnsWrapper}>
					<TouchableOpacity style={styles.btn} onPress={onReady}>
						<Text style={styles.btnText}>READY</Text>
					</TouchableOpacity>
	
					<TouchableOpacity style={styles.btn} onPress={onCancel}>
						<Text style={styles.btnText}>CANCEL</Text>
					</TouchableOpacity>
				</View>
				
				<StatusBar style="auto" />
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView style={styles.authWrapper}>

				<View style={styles.auth}>

					<Text style={styles.mainText}>AUTHORIZATION:</Text>
					<TextInput style={styles.input} placeholder={'Username'} value={loginUsername} onChangeText={setLoginUsername}></TextInput>
					<TextInput style={styles.input} placeholder={'Password'} value={loginPassword} onChangeText={setLoginPassword}></TextInput>
					<TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
						<Text style={styles.btnText}>LOG IN</Text>
					</TouchableOpacity>

				</View>

				<StatusBar style='auto'/>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		position: 'relative'
	},
	text: {
		color: 'white'
	},
	btn: {
		height: 40,
		width: 150,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	btnText: {
		color: 'white',
		fontWeight: 600,
		fontSize: 18
	},
	btnsWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 350,
		position: 'absolute',
		bottom: 40,
		left: '50%',
		transform: [{translateX: -175}]
	},
	flatList: {
		paddingBottom: 160
	},

	input: {
		width: 200,
		height: 30,
		borderStyle: 'solid',
		borderWidth: 0.5,
		borderColor: 'black',
		textAlign: 'center',
		marginTop: 10,
	},
	auth: {
		width: 300,
   		justifyContent: 'center',
   		alignItems: 'center',
		minHeight: 50,
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.4,
		shadowRadius: 4,
		marginLeft: 10,
		marginRight: 10
	},
	authWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	mainText: {
		fontSize: 30
	},
	loginBtn: {
		height: 40,
		width: 150,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginTop: 10
	}
});

export default App;