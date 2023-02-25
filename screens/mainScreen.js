import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { variables } from '../styles/variables';
import { Actions } from './actions';
import { AuthScreen } from './authScreen/authScreen';
import { Description } from './description/description';
import { FlowForm } from './description/flowForm';
import { DescriptionColumn } from './descriptionColumn/descriptionColumn';
import { DraftScreen } from './draftsScreen/draftScreen';
import { HistoryScreen } from './historyScreen/historyScreen';
import { HomeScreen } from './homeScreen/homeScreen';
import Scanner from './Scanner/scanner';

export const MainScreen = () => {

    
const {isAuth, token} = useSelector(state => state.auth);

  const [currentRoute, setCurrentRoute] = useState('home')

  const router = {
    "home": <HomeScreen/>,
    "auth": <AuthScreen/>,
    "history":<HistoryScreen/>,
    "scanner": <Scanner/>,
    "draft": <DraftScreen/>,
    "description": <Description/>
  }

    return(
       <View style = {styles.container}>
            {/* <Description/> */}
            {/* <DescriptionColumn/> */}
            <FlowForm/>
            {/* {router[currentRoute]} */}
            <Actions setCurrentRoute={setCurrentRoute} currentRoute ={currentRoute}/>
            <StatusBar style="auto" />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'space-between',
      backgroundColor: variables.mainColor,
      paddingVertical:50,
      paddingHorizontal:20,

    },
  });

