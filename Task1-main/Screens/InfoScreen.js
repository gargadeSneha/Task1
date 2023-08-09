import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import strings, {en, hi} from '../Language/Traslator';

const InfoScreen = () => {
    
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 17, margin: 5}}>{strings.label3}</Text>
      <Text style={{fontSize: 17, margin: 5}}>{strings.label4}</Text>
      <Text style={{fontSize: 17, margin: 5}}>{strings.label5}</Text>
      <Text style={{fontSize: 17, margin: 5}}>{strings.label6}</Text>
      <Text style={{fontSize: 17, margin: 5}}>{strings.label7}</Text>
      <Text style={{fontSize: 17, margin: 5}}>{strings.label8}</Text>
      <Text style = {{fontSize: 17, margin: 5}}>{strings.label9}</Text>
    </View>
  );
}

export default InfoScreen

const styles = StyleSheet.create({})