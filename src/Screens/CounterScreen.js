import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CounterScreen = ()=>{
    const [counter, setCounter] = useState(0)
    return(
        <View>
            <Button
                title="Increase"
                onPress={()=>setCounter(counter + 1)}
            />
            <Button
                title="Decrease"
                onPress={()=>setCounter(counter - 1)}
            />
            <View style={styles.counterStyle}>
                <Text style={styles.counterTitle}>Current Counter:</Text>
                <View style={styles.counterBox}>
                    <Text>{counter}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counterStyle:{
        alignItems: 'center'
    },
    counterTitle:{
        fontWeight: 'bold',
        fontSize: 20
    },
    counterBox:{
        padding: 10,
        borderColor: 'black',
        borderWidth: 10,
    }
})

export default CounterScreen