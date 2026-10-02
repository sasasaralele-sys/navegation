import { StyleSheet, Text, View, Pressable } from "react-native";

export default function tela1(props){
    function avancar(){
        props.navigation.navigate('tela2');

    }
    return(
        <View>
            <Text>tela 1</Text>
            <Text>esta é a tela de inicio</Text>
            <Pressable onPress={avancar}>
                <Text>ir pra tela2</Text>
            </Pressable>
        </View>
    )

}