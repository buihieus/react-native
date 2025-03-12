import { useState } from "react";
import { StyleSheet,ScrollView,Text, TextInput, View,Button } from "react-native";

export default function App(){
    const [name, setName] = useState<string>("a");
    
    const[todoList, settodoList] = useState([
        { id: 1, title: 'task 1' },
        { id: 2, title: 'task 2' },
        { id: 3, title: 'task 3' },
        { id: 4, title: 'task 4' },
        { id: 5, title: 'task 5' },
        { id: 6, title: 'task 6' },
        { id: 7, title: 'task 7' },
        { id: 8, title: 'task 8' },
        { id: 9, title: 'task 9'},
        { id: 10, title: 'task 10' },
        { id: 11, title: 'task 11' },
        { id: 12, title: 'task 12' },
        { id: 13, title: 'task 13' },
        { id: 14, title: 'task 14' },
        { id: 15, title: 'task 15' },

    ])

    return (
        <View style={styles.container}>
            <View>
                
                <TextInput 
                onChangeText={value => setName(value)} // khi input thay doi gia tri thi ham nay se duoc goi
                value={name}
                autoCapitalize="none"
                autoCorrect={false}
                // keyboardType="numeric"
                // maxLength={2}
                // multiline

                style={{
                    //cai duoi de hien thi (lam 1 o input)
                    borderColor: 'violet', 
                    borderWidth: 1, 
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                }}/>
            </View>

            <Button title='add new'
            onPress={()=>alert("click me")}
            />

           <ScrollView  style={{ 
            marginTop: 20,
            borderColor:'red',
            borderWidth:1
            }}>
                {todoList.map(todo=>{
                    return (
                        <Text key={todo.id} 
                            style={styles.todo} 
                        >
                            {todo.title}
                        </Text>
                    )
                })}
           </ScrollView>
        </View>
    );

}
// css in js /styled component
const styles = StyleSheet.create({
    todo: {
        fontSize:30,
        backgroundColor:'pink',
        marginBottom:10,
        padding:15,

    },
    hoicailon: {
        color: "green",
    },
    text: {
        fontSize: 50, 
        fontWeight: 'bold', 
        color: 'blue'
    },
    container: {
    flex: 1, 
    backgroundColor: 'white', 
    fontSize:60, color:'red',
    marginTop:50,
    // justifyContent: 'center', 
    // alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20
    },
});
// import { Text, View } from "react-native"
// import AboutScreen from "./components/review/about";
// import HomeScreen from "./components/review/home";

// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import { OPENSANS_REGULAR } from "./utils/const";

// import { NavigationContainer } from '@react-navigation/native';


// import 'react-native-gesture-handler';
// import AppNavigation from "./components/navigation/app.navigation";
// import { SafeAreaView } from "react-native-safe-area-context";


// SplashScreen.preventAutoHideAsync(); // chặn hành động tự hiển thị trang ( thay vào đó là hiện màn hình chờ)


// const App = () => {

//     const [loaded, error] = useFonts({
//         [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
//     });
//     useEffect(() => {
//         if (loaded || error) {
//             SplashScreen.hideAsync(); // khi tải xog font thì ms hiển thị trang (ẩn màn hình chờ)
//         }
//     }, [loaded, error]);
//     if (!loaded && !error) {
//         return null;
//     }



//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <NavigationContainer>

//                 <AppNavigation />

//             </NavigationContainer>
//         </SafeAreaView>
//     )
// }

// export default App;