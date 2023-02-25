
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
const CompressedGas = require('../../icons/danger/compressed_gas.png')
const Corrosive = require('../../icons/danger/corrosive.png')
const EnvironmentallyHazardous = require('../../icons/danger/environmentally_hazardous.png')
const Explosive = require('../../icons/danger/explosive.png')
const Flammable = require('../../icons/danger/flammable.png')
const Harmful = require('../../icons/danger/harmful.png')
const HealthHazard = require('../../icons/danger/health_hazard.png')
const Oxidizing = require('../../icons/danger/oxidizing.png')
const Toxic = require('../../icons/danger/toxic.png')


export const DescriptionColumn = () => {

    
    return(
        <ScrollView style={styles.page}>
            <View style={styles.buttonContainer}><Button label="Взять колонку" /></View>

            <View style={styles.container}>
                <Text style={{...styles.status, backgroundColor: 'green'}}>Свободна</Text>       
                <Text style={styles.value}>ID 322323</Text>
                <Text style={{...styles.value, color: variables.fondColor, fontSize: 18}}>КОЛОНКАКОЛ ОНКА КОЛОНКА КОЛОН КА КОЛОНКА</Text>
                <Text style={styles.value}>Нева Реактив | ТУ60-09-5467-95</Text>
                {/* <Text style={styles.date}>23.12.2019 15:34</Text> */}
            </View>

            <View style={styles.wrap}>
                <View style={styles.box}>
                    <Text style={styles.title}>Серийный номер</Text>
                    <Text style={styles.mean}>18/Н18</Text>
                </View> 

            </View>

            <View style={{...styles.container, paddingTop: 25, backgroundColor: variables.utilityColor}}>
                <Text style={{...styles.title, color: 'white'}}>Счетчик инжекций и растворитель хранения</Text>          
                <Text style={{...styles.mean, color: 'white', fontSize:24}}>4564 инжекций</Text>
                <Text style={{...styles.mean, color: 'white', fontSize:24}}>H2O</Text>
            </View>

            <View style={{...styles.container, paddingTop: 25}}>
                <Text style={{...styles.title, color: 'black'}}>Основной проект</Text>          
                <Text style={{...styles.mean, color: 'black'}}>Такой-то какой-то, Такой-то какой-то, Такой-то какой-то, Такой-то какой-то</Text>
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
        position:'relative',
        width:'100%',
        backgroundColor:'white',
        borderRadius: 18,
        padding:15,
        paddingTop:6,
        marginBottom:15,
	},
    status:{
        fontSize:13,
        position:'absolute',
        top:-10,
        right:0,
        color: 'white',
        padding:10,
        borderRadius:7,
    },
    date:{
        color:variables.utilityColor,
        fontSize: 13,
        marginBottom: 3, 
        textAlign:'right',
    },
    value:{
        color:'black',
        fontSize: 15,
        marginBottom: 10,
    },
    wrap:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    box:{
        position:'relative',
        width:'48%',
        height:90,
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 18,
        padding:15,
        paddingTop:6,
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:12,
        position:'absolute',
        top:3,
        left:13,
        color: 'white',
    },
    mean:{
        fontSize:20,
        color: 'white',
    },
    image:{
        height:57,
        width:57,
        margin:2,
    },
    buttonContainer:{
        width:'100%',
        marginBottom:17,
        backgroundColor: variables.fondColor,
        borderRadius: 15,
    }
});
  