
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { variables } from '../../styles/variables';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Button'


const CompressedGas = require('../../icons/danger/compressed_gas.png')
const Corrosive = require('../../icons/danger/corrosive.png')
const EnvironmentallyHazardous = require('../../icons/danger/environmentally_hazardous.png')
const Explosive = require('../../icons/danger/explosive.png')
const Flammable = require('../../icons/danger/flammable.png')
const Harmful = require('../../icons/danger/harmful.png')
const HealthHazard = require('../../icons/danger/health_hazard.png')
const Oxidizing = require('../../icons/danger/oxidizing.png')
const Toxic = require('../../icons/danger/toxic.png')


export const Description = () => {

    
    return(
        <ScrollView style={styles.page}>
            <View style={styles.container}>            
                <Text style={styles.value}>ID 322323</Text>
                <Text style={{...styles.value, color: variables.fondColor, fontSize: 18}}>Трилон Б соль динатриевая 2/В</Text>
                <Text style={styles.value}>Нева Реактив | ТУ60-09-5467-95</Text>
                {/* <Text style={styles.date}>23.12.2019 15:34</Text> */}
            </View>

            <View style={styles.wrap}>
                <View style={styles.box}>
                    <Text style={styles.title}>Партия</Text>
                    <Text style={styles.mean}>18/Н18</Text>
                </View> 
                <View style={styles.box}>
                    <Text style={styles.title}>Упаковка</Text>
                    <Text style={styles.mean}>1009 г</Text>
                </View> 
            </View>

            <View style={{...styles.container, paddingTop: 30}}>
                <Text style={{...styles.title, color: 'black'}}>Наличие</Text>          
                <Text style={{...styles.mean, color: 'black'}}>100%</Text>
                <Text style={{...styles.mean, color: 'black'}}>1009 г</Text>
            </View>

            <View style={{...styles.container, backgroundColor: 'transparent'}}>
                <View   style={{...styles.wrap, justifyContent: 'center'}}>
                    <Image source={CompressedGas} style={styles.image} />
                    <Image source={Corrosive} style={styles.image} />
                    <Image source={EnvironmentallyHazardous} style={styles.image} />
                    <Image source={Explosive} style={styles.image} />
                    <Image source={Flammable} style={styles.image} />
                    <Image source={Harmful} style={styles.image} />
                    {/* <Image source={HealthHazard} style={styles.image} />
                    <Image source={Oxidizing} style={styles.image} />
                    <Image source={Toxic} style={styles.image} /> */}
                </View>

                <View style={styles.buttonContainer}><Button label="Оформить расход" /></View>
                
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
        marginTop:17,
        backgroundColor: variables.fondColor,
        borderRadius: 15,
    }
});
  