import { View, Text,StyleSheet, ScrollView } from "react-native";
const styles = StyleSheet.create({
    // react native default styles display flex => colums
    container:{
        flex:1,
        marginTop:40,
        borderWidth:1,
        borderColor:'red',
        justifyContent:'center',
        flexDirection:'column', //oy phụ thuộc vào thằng này khi nó muốn cnaw theo chiều nào
        // alignItems: 'center',//ox

        // justifyContent:'center', 
        // flexDirection:'row', //ox
        // alignItems: 'flex-end',// oy

    },
    item1: {
        borderWidth:1,
        padding:20,
        backgroundColor:'violet',
        flex:2,
        width:60
    },
    item2: {
        flex:1,
        borderWidth:1,
        padding:20,
        backgroundColor:'green',
        width:60
    },
    item3: {
        flex:1,
        borderWidth:1,
        padding:20,
        backgroundColor:'gray',
        width:60
    },
    item4: {
        flex:1,
        borderWidth:1,
        padding:20,
        backgroundColor:'orange',
        width:60
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