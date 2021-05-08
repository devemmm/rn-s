import React, {useState, useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SquareDetail from '../components/SquareDetail'

// const SquareScreen = ()=>{
//     const [red, setRed] = useState(0)
//     const [green, setGreen] = useState(0)
//     const [blue, setBlue] = useState(0)

//     const COLOR_INCREAMENT = 15;

//     const setColor = (color, change)=>{
//         // color === 'red', 'green', 'blue'
//         // chane === +15, -15

//         switch(color){
//             case 'red':
//                 red + change > 255 || red +change < 0 ? null : setRed(red + change);
//                 return;
//             case 'green':
//                 green + change > 255 || green +change < 0 ? null : setGreen(green + change);
//                 return;
//             case 'blue':
//                 blue + change  > 255 || blue +change < 0 ? null : setBlue(blue + change);
//                 return;
//             default:
//                 return
//         }
//     }

//     return(
//         <View>
//             <SquareDetail 
//                 onIncrease = {()=>setColor('red', COLOR_INCREAMENT)} 
//                 onDecrease = {()=>setColor('red', -1 * COLOR_INCREAMENT)} 
//                 color="Red"
//             />
//             <SquareDetail 
//                 onIncrease = {()=>setColor('green', COLOR_INCREAMENT)} 
//                 onDecrease = {()=>setColor('green', -1 * COLOR_INCREAMENT)} 
//                 color="Green"
//             />
//             <SquareDetail title="Blue" 
//                 onIncrease = {()=>setColor('blue', COLOR_INCREAMENT)} 
//                 onDecrease = {()=>setColor('blue', -1 * COLOR_INCREAMENT)} 
//                 color="Blue"
//             />
//             <View style={{height:100, width:100, backgroundColor: `rgb(${red},${green},${blue})`, marginTop: 50}}></View>
//         </View>
//     )
// }





const reducer = (state, action)=>{
    // state === {red: number, green: number, blue : number}
    // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

    switch(action.type){
        case 'change_red' :
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {... state, red: state.red + action.payload}
        case 'change_green' :
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {... state, green: state.green + action.payload}
        case 'change_blue' :
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {... state, blue: state.blue + action.payload}
        default:
            return state;
    }

}
const SquareScreen = ()=>{
    const COLOR_INCREAMENT = 15;
    const [state, dispatch] = useReducer(reducer, {red: 0, green : 0, blue: 0})
    const {red, green , blue} = state
    return(
            <View>
                <SquareDetail 
                    onIncrease = {()=>dispatch({ type : 'change_red', payload: COLOR_INCREAMENT})} 
                    onDecrease = {()=>dispatch({ type : 'change_red', payload: -1 * COLOR_INCREAMENT})} 
                    color="Red"
                />
                <SquareDetail 
                    onIncrease = {()=>dispatch({ type : 'change_green', payload: COLOR_INCREAMENT})} 
                    onDecrease = {()=>dispatch({ type : 'change_green', payload: -1 * COLOR_INCREAMENT})} 
                    color="Green"
                />
                <SquareDetail title="Blue" 
                    onIncrease = {()=>dispatch({ type : 'change_blue', payload: COLOR_INCREAMENT})} 
                    onDecrease = {()=>dispatch({ type : 'change_blue', payload: -1 * COLOR_INCREAMENT})} 
                    color="Blue"
                />
                <View style={{height:100, width:100, backgroundColor: `rgb(${red},${green},${blue})`, marginTop: 50}}></View>
                </View>
            )
}

const styles = StyleSheet.create({

})

export default SquareScreen