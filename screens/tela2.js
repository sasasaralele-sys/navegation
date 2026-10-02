import { StyleSheet, Text, View, Pressable } from "react-native";

export default function tela2(props){
    function avancar(){
        props.navigation.navigate('tela3');

    }

    function voltar(){
        props.navigation.goBack();
    }
    return(
        <View>
            <Text>tela 2</Text>
            <Text>esta é a segunda tela </Text>
            <Pressable onPress={avancar}>
                <Text>ir pra tela3</Text>
            </Pressable>
            <Pressable onPress={voltar}>
                <Text>voltar</Text>
            </Pressable>
        </View>
    )

}