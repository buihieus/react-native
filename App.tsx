import { useState } from "react";
import { Keyboard, StyleSheet ,TouchableWithoutFeedback,View} from "react-native";

import InputTodo from "./components/todo/input.todo";//RELATIVE PATH
import ListTodo from "./components/todo/list.todo";
import FlexBox from "./components/todo/flexbox";
export default function App(){

    
    const[todoList, setTodoList] = useState<ITodo[]>([
    
    ])
    function randomInteger(min: number,max: number){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const addTodo = (text:string) => {
        
        const todo = {id:randomInteger(1,1000000),title:text}
        setTodoList([...todoList, todo])// THÊM MỚI 1 TODO
    }
    const deleteTodo = (id:number) => {
        const newTodo = todoList.filter(todo => todo.id != id);
        setTodoList(newTodo);
    }
    return (
        // <FlexBox/>
        <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
           
        <InputTodo
        addTodo={addTodo}
        />  

        <ListTodo
        todoList={todoList}
        deleteTodo={deleteTodo}
        />
           
        </View>
        </TouchableWithoutFeedback>
    );

}
// css in js /styled component
const styles = StyleSheet.create({
    
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