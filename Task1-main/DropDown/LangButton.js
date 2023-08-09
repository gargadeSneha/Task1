import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LangButton = () => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('SelectLanguage')}>
        <Text>LangButton1</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LangButton

const styles = StyleSheet.create({})