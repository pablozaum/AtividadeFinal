import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppLogin from './AppLogin';
import AppList from './AppList';
import AppForm from './AppForm';
 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppLogin" component={AppLogin}
                    options={{
                        title: 'ListCompras',
                        headerStyle: {
                          backgroundColor: 'blue'                                                    
                        },
                        headerTitleStyle: {
                          color: '#fff',
                          fontSize: 25                      
                      },
                    }}
                />
        <Stack.Screen name="AppList" component={AppList}
                    options={{
                        title: 'Lista de Compras',
                        headerStyle: {
                          backgroundColor: 'blue'                                                    
                        },
                        headerTitleStyle: {
                          color: '#fff',
                          fontSize: 25                      
                      },
                    }}
                />
        <Stack.Screen name="AppForm" component={AppForm}
                    options={{
                        title: 'Item para comprar',
                        headerStyle: {
                          backgroundColor: 'blue'                                                    
                        },
                        headerTitleStyle: {
                          color: '#fff',
                          fontSize: 25                      
                      },
                    }}
                />
      </Stack.Navigator>

    </NavigationContainer>
);
}