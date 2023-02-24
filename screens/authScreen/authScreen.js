import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthCh } from '../../redux/store/authSlice';
import { variables } from '../../styles/variables';
import { Button } from '../../components/Button'

const MainLogo = require('../../icons/main_logo.png')


export const AuthScreen = () => {
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.auth);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
	
    
    return(
		<View style={styles.container}>

			<View style={styles.authWindow}>

				<TextInput
				value={login}
				onChangeText={setLogin}
				placeholder={'Логин'}
				style={styles.input}
				/>
				<TextInput
				value={password}
				onChangeText={setPassword}
				placeholder={'Пароль'}
				secureTextEntry={true}
				style={styles.input}
				/>
				<View><Button label="Войти" /></View>
				
			</View>

			<View style={styles.imageContainer}>
				<Image source={MainLogo} style={styles.image} />
			</View>
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width:'100%',
		justifyContent: 'center',
		alignContent:'center',
		paddingBottom:88,
		position: 'absolute',
		top: 0,
		paddingHorizontal:20,
	},
	authWindow:{
		flex:1,
		backgroundColor: "white",
		width: '100%',
		borderRadius: 10,
		padding: 20,
		justifyContent:'center',
		marginTop:100,
	},
    input: {
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: variables.mainColor,
        marginBottom: 17,
        backgroundColor:'white',
        borderRadius: 7,
    },
    imageContainer:{
		flex:1,
		alignItems:'center',
		justifyContent:'flex-start',
    },
    image:{
		width: 160,
		resizeMode: 'contain'
    },
});
  