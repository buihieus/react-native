import { View, Text,StyleSheet } from "react-native";
const styles = StyleSheet.create({
    // react native default styles display flex
    container:{
        flex:1,
        marginTop:40,
        borderWidth:1,
        borderColor:'red',
        // flexDirection:'row', 
        // để ngang các chiều cảu cột
        justifyContent:'center', 
    },
    item1: {
        borderWidth:1,
        padding:20,
        backgroundColor:'violet',
    },
    item2: {
        borderWidth:1,
        padding:20,
        backgroundColor:'green',
    },
    item3: {
        borderWidth:1,
        padding:20,
        backgroundColor:'gray',
    },
    item4: {
        borderWidth:1,
        padding:20,
        backgroundColor:'orange',
    },
})
//height, width 
const FlexBox =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>This is a View</Text>
            </View>
            <View style={styles.item2}>
                <Text>This is a View</Text>
            </View>
            <View style={styles.item3}>
                <Text>This is a View</Text>
            </View>
            <View style={styles.item4}>
                <Text>This is a View</Text>
            </View>
        </View>
    )
}

export default FlexBox;