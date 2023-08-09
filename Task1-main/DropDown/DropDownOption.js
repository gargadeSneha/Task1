import strings, {en, hi} from '../Language/Traslator';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DropDownOption = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')}>
        <Text>LangButton2</Text>
      </TouchableOpacity>
    
    </View>
  );
};

export default DropDownOption;

const styles = StyleSheet.create({});
