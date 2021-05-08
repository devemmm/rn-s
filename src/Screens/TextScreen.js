import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const TextScreen = ()=>{
    const [name, setName] = useState('')
    return(
        <View style={styles.card}>
            <Text style={styles.title}>Enter Password</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Text here required"
                autoCapitalize= "none"
                autoCorrect={false}
                value={name}
                maxLength= {8}
                passwordRules={true}
                onChangeText = {(textIn)=> setName(textIn)}
            />
            <Text>Yoour name is {name}</Text>
            {name.length < 5 ? <Text>Password must be longer than 5</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        marginVertical: 20,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput:{
        borderColor: 'red',
        borderWidth:2,
        padding: 10,
        borderRadius: 10,
        margin: 15
    }
})

export {TextScreen}