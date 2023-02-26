
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


export const FlowForm = () => {

    
    return(
        <ScrollView style={styles.page}>
            <View style={styles.container}>            
                <Text style={styles.title}>Оформление расхода</Text>
                <Text style={{...styles.value, color: variables.fondColor, fontSize: 16}}>Трилон Б соль динатриевая 2/В</Text>
                

                <View style={styles.wrap}>
                    <Text style={styles.destination}>Статья списания</Text>
                    <TextInput 
                    style={{...styles.input, height: 44}}/>
                </View>
                <View style={styles.wrap}>
                    <Text style={styles.destination}>Вид испытания</Text>
                    <TextInput 
                    multiline={true}
                    numberOfLines={10}
                    style={styles.input}/>
                </View>
                <View style={styles.wrap}>
                    <Text style={styles.destination}>Количество</Text>
                    <TextInput 
                    style={{...styles.input, height: 44}}/>
                </View>

                <View style={styles.wrap}>
                    <Text style={styles.destination}>Дата</Text>
                    <Text style={{...styles.destination, width: '70%', color:variables.utilityColor}}>25.02.2023 23:47</Text>
                </View>
                <View style={styles.wrap}>
                    <View style={{...styles.buttonContainer, backgroundColor:'gray'}}><Button label="В черновик"/></View>
                    <View style={styles.buttonContainer}><Button label="Списать" /></View>
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
        position:'relative',
        width:'100%',
        backgroundColor:'white',
        borderRadius: 18,
        padding:15,
        paddingTop:6,
        marginBottom:15,
	},
    title:{
        textAlign:'center',
        fontSize: 17,
        marginTop:10,
        marginBottom:15,
    },
    destination:{
        width:'30%',
        fontSize: 13,
        marginRight:3,
        marginBottom:17,
    },
    input: {
        height: 110,
        textAlignVertical: 'top',
        width: '70%',
        padding: 10,
        borderWidth: 1,
        borderColor: variables.mainColor,
        marginBottom: 17,
        backgroundColor:'white',
        borderRadius: 7,
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

    buttonContainer:{
        width:'47%',
        marginTop:17,
        backgroundColor: variables.fondColor,
        borderRadius: 15,
    }
});
  