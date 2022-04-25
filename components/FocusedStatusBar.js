import React from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'react-native'
import {useFocused, useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = () => {
    const isFocused=useIsFocused()
    return (isFocused?<StatusBar animated={true}/>:null
    )
}

export default FocusedStatusBar
