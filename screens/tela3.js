import { StyleSheet, Text, View, Pressable } from "react-native";

export default function tela3(props){
    function inicio(){
        props.navigation.navigate('tela1');

    }

    function voltar(){
        props.navigation.goBack();
    }
    return(
        <View>
            <Text>tela 3</Text>
            <Text>esta é terceira tela</Text>
            <Pressable onPress={inicio}>
                <Text>ir para o inicio</Text>
            </Pressable>
            <Pressable onPress={voltar}>
                <Text>voltar</Text>
            </Pressable>
        </View>
    )

}