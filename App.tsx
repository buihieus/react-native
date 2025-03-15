import { useState } from "react";
import { Keyboard, StyleSheet ,TouchableWithoutFeedback,View, Text} from "react-native";

import InputTodo from "./components/todo/input.todo";//RELATIVE PATH
import ListTodo from "./components/todo/list.todo";
import FlexBox from "./components/todo/flexbox";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App(){

    const Stack = createNativeStackNavigator();
    function HomeScreen() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
          </View>
        );
      }
    
      
    function DetailsScreen() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        );
      }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
