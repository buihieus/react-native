import { useState } from "react";
import { Button, TextInput,View,StyleSheet, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MineButton from "../button/mine.button";
const styles = StyleSheet.create({
    todoInput: {
        //cai duoi de hien thi (lam 1 o input)
        borderColor: 'violet', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
    }
}) 
interface IProps{
    addTodo: (v: string) => void;
}
const InputTodo =(props: IProps) => {

    const {addTodo} = props;
    const [name, setName] = useState<string>('');
    
    const handleAddNewTodo = () => {
        // validate
        if(!name){
            Alert.alert('thông tin không hợp lệ',
                'tiêu đề không được để trống',[
                    // {
                    //   text: 'Ask me later',
                    //   onPress: () => console.log('Ask me later pressed'),
                    // },
                    // {
                    //   text: 'Cancel',
                    //   onPress: () => console.log('Cancel Pressed'),
                    //   style: 'cancel',
                    // },
                    {text: 'OK cu nhé', onPress: () => console.log('OK Pressed')},
                  ]
            );
            //thêm cái Alert. thì ở hộp thoại hiện lên nó sẽ không có từ alert

            return
        }
        addTodo(name);
        setName('');
    }
    return (
        <>
        <View style={{marginBottom:20}}>
        <TextInput 
            onChangeText={value => setName(value)} // khi input thay doi gia tri thi ham nay se duoc goi
            value={name}
            autoCapitalize="none"
            autoCorrect={false}
                        
        
            style={styles.todoInput}
        />
           

        <MineButton
        title="Add new"
        onPress={handleAddNewTodo}
        />

        </View>

        </>
        
    )
}

export default InputTodo;