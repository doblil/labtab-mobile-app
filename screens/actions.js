import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image,  TouchableHighlight , TouchableNativeFeedbackComponentComponent } from 'react-native';
import { variables } from '../styles/variables';



const MainLogo = require('../icons/main_logo.png')
const ProfileIcon = require('../icons/person.png')
const BarcodeIcon = require('../icons/upc-scan.png')
const DraftIcon = require('../icons/draft.png')
const HistoryIcon = require('../icons/history.png')


export const Actions = (props) => {
    const {currentRoute, setCurrentRoute} = props
    
    const handleStyle = (current) => {
        if (currentRoute === current) return {...styles.imageContainer, ...styles.imageContainerActive};
        return styles.imageContainer
    }

    return(
        <View style={styles.actions}>
            <  TouchableHighlight   style ={{width:70}} onPress = { () => {setCurrentRoute('home')} }>
                <View   style={handleStyle('home')}>
                    <Image source={ProfileIcon} style={styles.image} />
                </View>
            </  TouchableHighlight >
            
            <  TouchableHighlight   style ={{width:70}} onPress = { () => {setCurrentRoute('draft')} }>
                <View   style={{...handleStyle('draft'), paddingLeft: 7}}>
                    <Image source={DraftIcon} style={styles.image} />
                </View>
            </  TouchableHighlight >
            
            <  TouchableHighlight   style ={{width:70}} onPress = { () => {setCurrentRoute('history')} }>
                <View   style={handleStyle('history')}>
                    <Image source={HistoryIcon} style={styles.image} />
                </View>
            </  TouchableHighlight >
            
            <  TouchableHighlight   style ={{width:70}} onPress = { () => {setCurrentRoute('scanner')} }>
                <View  style={handleStyle('scanner')}>
                    <Image source={BarcodeIcon} style={styles.image} />
                </View>
            </  TouchableHighlight >

        </View>


    )
}

const styles = StyleSheet.create({

    actions:{
        height:'6%',
		width:'100%',
		justifyContent: 'space-between',
		alignContent:'center',
        flexDirection: 'row', 
    },
    imageContainer:{
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:variables.utilityColor,
        borderRadius: 18,
    },
    imageContainerActive:{
        backgroundColor:'#ffb027',
    },
    image: {
        height: 30,
        resizeMode: 'contain',
    },
});
  