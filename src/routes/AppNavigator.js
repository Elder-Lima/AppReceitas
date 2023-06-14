import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen    from '../Home/index.js';
import BoloChocolate from '../Receitas/bolo.js';
import Lasanha from '../Receitas/lasanha.js';
import PaoDeQueijo from '../Receitas/paodequeijo.js';
import Pudim from '../Receitas/pudim.js';
import Strogonoff from '../Receitas/strogonoff.js';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false // Oculta a barra de navegação (header)
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BoloDeChocolate" component={BoloChocolate} />
        <Stack.Screen name="Lasanha" component={Lasanha} />
        <Stack.Screen name="Paodequeijo" component={PaoDeQueijo} />
        <Stack.Screen name="Pudim" component={Pudim} />
        <Stack.Screen name="Strogonoff" component={Strogonoff} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;