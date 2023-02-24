
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { variables } from '../../styles/variables';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Button'


const MainLogo = require('../../icons/main_logo.png')
const ProfileIcon = require('../../icons/person.png')
const BarcodeIcon = require('../../icons/upc-scan.png')
const DraftIcon = require('../../icons/draft.png')
const HistoryIcon = require('../../icons/history.png')
const PhoneIcon = require('../../icons/phone.png')
const EnvelopeIcon = require('../../icons/envelope.png')
const TrashIcon = require('../../icons/trash.png')


export const HistoryScreen = () => {

    
    return(
        <ScrollView style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.date}>23.12.2019 15:34</Text>
                <Text style={styles.value}>Списание реактива</Text>
                <Text style={styles.value}>Аммоний уксуснокислый 98,50%</Text>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.date}>23.12.2019 15:34</Text>
                <Text style={styles.value}>Добавление пользователя</Text>
                <Text style={styles.value}>Суслов Евгений Юрьевич</Text>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.date}>23.12.2019 18:34</Text>
                <Text style={styles.value}>Вход в систему</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.date}>29.12.2019 15:34</Text>
                <Text style={styles.value}>Изменение статуса заказа</Text>
                <Text style={styles.value}>Колонка инертсил с18 энкепированная с1 фазой</Text>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.date}>1.01.2020 06:34</Text>
                <Text style={styles.value}>Изменение статуса заказа</Text>
                <Text style={styles.value}>Колонка инертсил с18 энкепированная с1 фазой</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.date}>3.01.2020 11:29</Text>
                <Text style={styles.value}>Изменение статуса заказа</Text>
                <Text style={styles.value}>Колонка инертсил с18 энкепированная с1 фазой</Text>
            </View>

            </ScrollView>
    )
}

const styles = StyleSheet.create({

    page:{
        marginBottom:15,
        width:'100%',
    },

	container: {
        width:'100%',
        backgroundColor:'white',
        borderRadius: 18,
        padding:15,
        marginBottom:15,
	},
    date:{
        color:variables.utilityColor,
        fontSize: 15,
        marginBottom: 10, 
    },
    value:{
        color:'black',
        fontSize: 16,
        marginBottom: 5,
    },
    wrap:{
        flexDirection:'row',
        alignItems:'center',
    },
    imageContainer:{
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
    },
    image:{
        resizeMode: 'contain',
    },
    input: {
        height: 44,
        width: '50%',
        padding: 10,
        borderWidth: 1,
        borderColor: variables.mainColor,
        marginBottom: 17,
        backgroundColor:'white',
        borderRadius: 7,
    },
    buttonContainer:{
        width:'70%',
    },
    imageContainer:{
        height: 40,
        width:'30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainerActive:{
        backgroundColor:'#ffb027',
    },
    image: {
        height: 30,
        resizeMode: 'contain',
    },

});
  