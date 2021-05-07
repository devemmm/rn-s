import React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'

const HomeScreen = ({navigation})=>{
  return (
    <View>
        <Button
          title="Go to Component Demo"
          onPress={()=>navigation.navigate("Component")}
        />

        <Button
          title="Go to List Demo"
          onPress={()=>navigation.navigate("List")}
        />
        <Button
          title="Go to Image Demo"
          onPress={()=>navigation.navigate("Image")}
        />
        <Button
          title="Go to Counter Demo"
          onPress={()=>navigation.navigate("Counter")}
        />
        <Button
          title="Go to Color Demo"
          onPress={()=>navigation.navigate("Color")}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    homeStyle:{
      fontSize : 45
    }
})

export default HomeScreen