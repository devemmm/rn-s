import React, {useState, useReducer} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const reducer = (state, action)=>{
    // state === {counter: number}
    // action === {type: 'increase' || 'decrease', payload: number}

    switch(action.type){
        case 'increase':
            return {counter: state.counter + action.payload};
        case 'decrease':
            return {counter: state.counter - action.payload};
        default:
            return state;
    }
}
const CounterScreen = ()=>{
    // const [counter, setCounter] = useState(0)
    const [state, dispacher] = useReducer(reducer, {counter: 0})
    const {counter} = state;

    return(
        <View>
            <Button
                title="Increase"
                onPress={()=>dispacher({type: 'increase', payload: 1})}
            />
            <Button
                title="Decrease"
                onPress={()=>dispacher({type: 'increase', payload: -1})}
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