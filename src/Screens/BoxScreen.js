import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = ()=>{
    return(
        // <View style={styles.viewStyle}>
        //     <Text style={styles.textOneStyle}>Child #1</Text>
        //     <Text style={styles.textTwoStyle}>Child #2</Text>
        //     <Text style={styles.texThirdStyle}>Child #3</Text>
        // </View>
        <View style={styles.cardStyle}>
            <View style={styles.box1Style}></View>
            <View style={styles.box2Style}></View>
            <View style={styles.box3Style}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textOneStyle:{
        borderWidth: 10,
        borderColor: 'red',
        flex: 5,
        alignSelf: 'center'
    },
    textTwoStyle:{
        borderWidth: 10,
        borderColor: 'green',
        flex: 2
    },
    texThirdStyle:{
        borderWidth: 10,
        borderColor: 'grey',
        flex: 3
    },
    cardStyle:{
        height: 210,
        borderTopColor: 'red',
        borderTopWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1Style:{
        height: 100,
        width: 100,
        backgroundColor: 'orange'
    },
    box2Style:{
        height: 100,
        width: 100,
        backgroundColor: 'grey',
        alignSelf: 'flex-end'
    },
    box3Style:{
        height: 100,
        width: 100,
        backgroundColor: 'green'
    }
})

export {BoxScreen}