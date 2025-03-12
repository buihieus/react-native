import { useState } from "react";
import { StyleSheet,Text, TextInput, View,Button } from "react-native";

export default function App(){
    const [name, setName] = useState<string>("a");
   
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

            <Button title='add new'/>

            <Text style={styles.text}> {name}</Text>
            <Text style={styles.hoicailon}> chao may nha
                <Text> Hello World!</Text>
            </Text>
        </View>
    );

}
// css in js /styled component
const styles = StyleSheet.create({
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