import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Introdução', //Set Header Title
            headerStyle: {
              backgroundColor: '#697DF9', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage
          }
          options={{
            title: 'Experiências', //Set Header Title
            headerStyle: {
              backgroundColor: '#697DF9', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'Extras', //Set Header Title
            headerStyle: {
              backgroundColor: '#697DF9', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 1000,
  },
  title:{
    margin:24,
    fontsize:18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph:{
    margin:24,
    fontsize:14,
    textAlign: 'center',
  }
});
 
export default App;
