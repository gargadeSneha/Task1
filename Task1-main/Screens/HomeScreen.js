import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import strings, {en, hi} from '../Language/Traslator';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  //TextField
  const [input, setInput] = useState('');
  //Before Filter
  const [info, setInfo] = useState([]);
  //After Filter
  const [newInfo, setNewInfo] = useState();

  const getApiCall = async () => {
    //api call
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    let result = await fetch(url);
    result = await result.json();
    //console.warn(result);
    setInfo(result.categories);
  };

  useEffect(() => {
    getApiCall();
    //console.log(item)
  }, []);

  useEffect(() => {}, [isFocused]);

  const searchTyped = text => {
    setInput(text);
    if (text.length != 0) {
      setInfo(searchFinal(text));
      // console.log(info);
    } else {
      getApiCall();
    }
  };

  const removeText = () => {
    setInput('');
    getApiCall();
  };

  const searchFinal = text => {
    const newSplitSearch = text.split('');
    const finalArray = [];
    info.map(data => {
      const nameData = data.strCategory;
      let shouldBeAdded = true;
      for (let i = 0; i < newSplitSearch.length; i++) {
        if (nameData.includes(newSplitSearch[i])) {
        } else {
          shouldBeAdded = false;
        }
      }
      if (shouldBeAdded) {
        finalArray.push(data);
      }
    });
    return finalArray;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View
          style={{
            width: '85%',
            flexDirection: 'row',
            backgroundColor: '#ddd',
            borderRadius: 5,
          }}>
          <Image
            source={require('../assets/searchIcon.png')}
            style={{width: '10%', height: '100%'}}
          />
          <TextInput
            value={input}
            onChangeText={text => searchTyped(text)}
            style={styles.searchBarInput}
            placeholder="Search"
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '15%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              backgroundColor: 'pink',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => removeText()}>
            <Text style={{fontSize: 15, backgroundColor: 'pink'}}>
              {strings.label1}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          marginTop: 4,
        }}
        columnWrapperStyle={{flex: 1}}
        numColumns={2}
        data={info}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.cell}
            onPress={() => navigation.navigate('DetailScreen', {item})}>
            <View
              style={{
                width: '94.4%',
                borderRadius: 10,
                margin: 5,
                height: '82%',
              }}>
              <Image
                source={{uri: item.strCategoryThumb}}
                style={{width: '100%', height: '100%', borderRadius: 10}}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                width: '94.4%',
                borderRadius: 5,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 5,
              }}>
              <Text style={{paddingLeft: 8, fontWeight: '500', fontSize: 15}}>
                {item.strCategory}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 5,

    marginBottom: 32,
  },
  searchIcon: {
    padding: 10,
  },
  cell: {
    width: '47.3%',
    height: 215,
    margin: 5,
    backgroundColor: '#ddd',
    borderRadius: 15,
    marginTop: 5,
  },
  searchBar: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 1,
    paddingLeft: 0,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    width: '97%',
  },
  searchBarInput: {
    height: '100%',
    backgroundColor: '#ddd',
    paddingTop: 1,
    paddingLeft: 10,
    borderRadius: 5,
    width: '90%',
  },
  dropdown: {
    height: 44,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 10,
    width: 50,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
