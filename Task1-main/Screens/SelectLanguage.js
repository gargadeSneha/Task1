import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import strings, {en, hi} from '../Language/Traslator';

const SelectLanguage = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState([
    {lang: 'English', selected: false},
    {lang: 'Hindi', selected: false},
    {lang: 'Panjabi', selected: false},
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const changeLanguage = item => {
    if (item === 'English') {
      strings.setLanguage('en');
    } else if (item === 'Hindi') {
      strings.setLanguage('hi');
    } else if (item === 'Panjabi') {
      strings.setLanguage('pj')
    }
    setSelectedLanguage(item);
    // navigation.goBack();
  };
  const [focus, setFocus] = useState(false);
  return (
    <View style={{flex: 1, margin: 10}}>
      <View>
        <FlatList
          style={{
            width: '100%',
            height: 200,
            backgroundColor: 'white',
          }}
          data={value}
          numColumns={2}
          columnWrapperStyle={{flex: 1}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.cell}
              onPress={() => {
                changeLanguage(item.lang);
                setFocus(!focus);
              }}>
              <View style={styles.radio}>
                {selectedLanguage === item.lang && (
                  <View style={styles.radioFill} />
                )}
              </View>    
              <View
                style={{
                  width: '70%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text>{item.lang}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Text>{strings.label2}</Text>
      </View>
    </View>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'white',
    height: 50,
    width: '46%',
    marginLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 10
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignSelf: 'center',
    marginLeft: 15,
  },
  radioFill: {
    height: 15,
    width: 15,
    backgroundColor: 'black',
    borderRadius: 7.5,
  },
});
