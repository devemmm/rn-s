import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const ImageDetail = ({title, imageSource, score})=>{
    return(
        <View style={styles.imageStyle}>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        marginVertical : 30,
        alignItems: 'center'
    }
})

export default ImageDetail