import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const SquareDetail = ({color, onIncrease, onDecrease})=>{
    return(
        <View>
            <Text>{color}</Text>
            <Button
                onPress={()=>onIncrease()}
                title={`More ${color}`}
            />
            <Button
                onPress={()=>onDecrease()}
                title={`Less ${color}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SquareDetail