import { StyleSheet,View, Text, Pressable } from "react-native"
import {AntDesign} from '@expo/vector-icons';
const styles = StyleSheet.create({
    text:{
        textTransform:'uppercase',
        // color:'white',
        // fontWeight:'bold',
        // fontSize:20
    }
    ,
    btnContainer:{
        borderWidth:1,
        borderColor:'green',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:10,
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        alignSelf:"flex-start",
        backgroundColor:"#ccc"
    }
})
interface IProps{
    title:string,
    onPress:()=>void;
}
const MineButton=(props:IProps)=>{
    const {title,onPress}=props;
    return (
        <Pressable 
        style={({pressed})=> ({
            opacity:pressed=== true?0.5:1,
            alignSelf:"flex-start"
        })}
        onPress={onPress}
        >
        <View style={styles.btnContainer}>
             <AntDesign 
                name="pluscircle" 
                size={30} color="black" 
            />
            <Text style={styles.text}>{title}</Text>
        </View>
        </Pressable>
    )
}

export default MineButton;