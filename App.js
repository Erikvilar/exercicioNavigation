import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mycar from './screens/mycar.js';
import {Button}from "react-native"
import Produto from './screens/Produto.js';
import ProdutoDetalhes from './screens/ProdutoDetalhes';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Produto"
          component={Produto}
          options={{
            headerRight: () => (
              <Button
                onPress={() => 'Carriho'}
                title="Carriho"
                color="#EB8317"
              />
            ),
          }}
        />
        <Stack.Screen name="Carrinho" component={Mycar} />
        <Stack.Screen name="Detalhes do produto" component={ProdutoDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
