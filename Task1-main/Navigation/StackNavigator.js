import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';


import LangButton from '../DropDown/LangButton';
import SelectLanguage from '../Screens/SelectLanguage';
import DropDownOption from '../DropDown/DropDownOption';
import InfoScreen from '../Screens/InfoScreen';



const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerLeft: () => <LangButton />,
            headerStyle: {
              backgroundColor: 'green',
            },
            headerRight: () => <DropDownOption />,
          }}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen
          name="SelectLanguage"
          component={SelectLanguage}
          options={{
            title: 'Select Language',
          }}
        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{
            title: 'Info',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator

const styles = StyleSheet.create({})