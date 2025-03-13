import { useState } from "react";
import { Button, TextInput,View,StyleSheet } from "react-native";

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
        addTodo(name);
    }
    return (
        <>
        <View>
        <TextInput 
            onChangeText={value => setName(value)} // khi input thay doi gia tri thi ham nay se duoc goi
            value={name}
            autoCapitalize="none"
            autoCorrect={false}
                        
        
            style={styles.todoInput}
        />
        
        <Button 
            title='add new'
            onPress={handleAddNewTodo}//useCallback
        />
        </View>
        </>
    )
}

export default InputTodo;