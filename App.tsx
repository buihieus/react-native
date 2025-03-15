import { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, Text, Button } from "react-native";

import InputTodo from "./components/todo/input.todo";//RELATIVE PATH
import ListTodo from "./components/todo/list.todo";
import FlexBox from "./components/todo/flexbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
export default function App() {

  const Stack = createNativeStackNavigator();

  function HomeScreen(props: any) {
    // console.log(">>> check props", props);
    const navigation = props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="go to details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="go to user id =1"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="go to user id =2"
            onPress={() => navigation.navigate('Details')}
          />
        </View>

      </View>
    );
  }


  function DetailsScreen(props: any) {
    const navigation: any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id = ??</Text>
        <Button title="go back home" onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
