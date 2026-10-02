import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import tela1 from './screens/tela1';
import tela2 from './screens/tela2';
import tela3 from './screens/tela3';

const Stack= createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tela1" component={tela1} options={{title:"inicio"}}/>
        <Stack.Screen name="tela2" component={tela2} options={{title:"segunda tela"}}/>
        <Stack.Screen name="tela3" component={tela3} options={{title:"terceira tela"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}