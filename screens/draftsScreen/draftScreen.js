
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


export const DraftScreen = () => {

    
    return(
        <ScrollView style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.date}>23.12.2019 15:34</Text>
                <Text style={styles.value}>ID 322323</Text>
                <Text style={{...styles.value, color: variables.fondColor, fontSize: 17}}>Трилон Б соль динатриевая 2/В</Text>
                <View style={styles.wrap}>
                    <TextInput style={styles.input}/>
                    <Text style={{...styles.value, marginLeft: 10}}>g</Text>
                </View>
                <Text style={styles.value}>1.003.258.977, Проктозан нью, суппозитории ректальные</Text>
                <Text style={styles.value}>	КО ВЭЖХ</Text>
                <View style={styles.wrap}>
                    <View style={styles.buttonContainer}><Button label="Списать" /></View>
                    <View style={styles.imageContainer}>
                        <Image source={TrashIcon} style={styles.image} />
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.date}>03.10.2029 12:04</Text>
                <Text style={styles.value}>ID skdk323</Text>
                <Text style={{...styles.value, color: variables.fondColor, fontSize: 17}}>Кислота фосфорномолибденовая 92%</Text>
                <View style={styles.wrap}>
                    <TextInput style={styles.input}/>
                    <Text style={{...styles.value, marginLeft: 10}}>g</Text>
                </View>
                <Text style={styles.value}>7.083.988.034, Проктозан олд, суппозитории нозальные</Text>
                <Text style={styles.value}>	КО ВЭЖХ</Text>
                <View style={styles.wrap}>
                    <View style={styles.buttonContainer}><Button label="Списать" /></View>
                    <View style={styles.imageContainer}>
                        <Image source={TrashIcon} style={styles.image} />
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.date}>03.10.2029 12:04</Text>
                <Text style={styles.value}>ID skdk323</Text>
                <Text style={{...styles.value, color: variables.fondColor, fontSize: 17}}>Кислота фосфорномолибденовая 92%</Text>
                <View style={styles.wrap}>
                    <TextInput style={styles.input}/>
                    <Text style={{...styles.value, marginLeft: 10}}>g</Text>
                </View>
                <Text style={styles.value}>7.083.988.034, Проктозан олд, суппозитории нозальные</Text>
                <Text style={styles.value}>	КО ВЭЖХ</Text>
                <View style={styles.wrap}>
                    <View style={styles.buttonContainer}><Button label="Списать" /></View>
                    <View style={styles.imageContainer}>
                        <Image source={TrashIcon} style={styles.image} />
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
        width:'100%',
        backgroundColor:'white',
        borderRadius: 18,
        padding:15,
        paddingTop:6,
        marginBottom:15,
	},
    date:{
        color:variables.utilityColor,
        fontSize: 13,
        marginBottom: 3, 
        textAlign:'right',
    },
    value:{
        color:'black',
        fontSize: 16,
        marginBottom: 10,
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
  