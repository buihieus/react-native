import {  View, Text, Button } from "react-native";

import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
export default function App() {

  const Stack = createNativeStackNavigator();

  function HomeScreen(props: any) {
    const navigation = props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate('Details')}
            title="go to details"
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate('Details', { userId: 1, name: "son" })}
            title="go to user id =1"
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate('Details', { userId: 1, name: "son" })}
            title="go to user id =2"
          />
        </View>

      </View>
    );
  }


  function DetailsScreen(props: any) {
    console.log(props);
    const route:any = useRoute();
    // console.log(">>> check route", props);
    const navigation: any = useNavigation();
    // console.log(">>> check route", route.params);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id = {route.params.userId}</Text>
        <Button title="go back home"
          onPress={() => navigation.goBack()}
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
