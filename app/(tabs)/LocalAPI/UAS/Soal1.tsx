import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DaftarBuku from './screens/DaftarBuku';
import TambahBuku from './screens/TambahBuku';
import EditBuku from './screens/EditBuku';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DaftarBuku">
        <Stack.Screen name="DaftarBuku" component={DaftarBuku} />
        <Stack.Screen name="TambahBuku" component={TambahBuku} />
        <Stack.Screen name="EditBuku" component={EditBuku} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;