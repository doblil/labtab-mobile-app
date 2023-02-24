
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { variables } from '../../styles/variables';



const MainLogo = require('../../icons/main_logo.png')
const ProfileIcon = require('../../icons/person.png')
const BarcodeIcon = require('../../icons/upc-scan.png')
const DraftIcon = require('../../icons/draft.png')
const HistoryIcon = require('../../icons/history.png')
const PhoneIcon = require('../../icons/phone.png')
const EnvelopeIcon = require('../../icons/envelope.png')


export const HomeScreen = () => {

    
    return(
        <ScrollView style={styles.page}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.info}>Добровольская Лилия Анатольевнаzdf</Text>
                    <Text style={styles.info}>химик-аналитик ОРАМ</Text>
                    <Text style={styles.info}>Полисинтез</Text>
                </View>
                <View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.imageContainer}>
                            <Image source={PhoneIcon} style={styles.image} />
                        </View>
                        <Text style={{fontSize:17}}>+8293823892</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.imageContainer}>
                            <Image source={EnvelopeIcon} style={styles.image} />
                        </View>                
                        <Text style={{fontSize:17}}>lily@qween.su</Text>
                    </View>
                    
                </View>
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
        height:'auto',
        width:'100%',
		paddingBottom:30,
        backgroundColor:'white',
        borderRadius: 18,
        marginBottom:20,
        padding:20,
        justifyContent:'space-between',
        paddingBottom:30,
	},
    info:{
        color:'black',
        fontSize: 18,
        marginBottom: 20,
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
    }

});
  