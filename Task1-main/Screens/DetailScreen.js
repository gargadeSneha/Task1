import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

const DetailScreen = () => {
 const navigation = useNavigation();
 const route = useRoute();
  console.log(route.params.item);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={styles.imgView}>
          <Image
            source={{uri: route.params.item.strCategoryThumb}}
            style={{width: '100%', height: '100%'}}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.category}>
          <Text
            style={{
              textAlign: 'center',
              padding: 5,
              fontSize: 20,
              fontWeight: 600,
            }}>
            {route.params.item.strCategory}
          </Text>
        </View>
        <View style={styles.dHeader}>
          <Text style={{padding: 5, fontSize: 18, fontWeight: 600}}>
           Discription :-
          </Text>
        </View>
        <View style={styles.discriptionView}>
          <Text style={{fontSize: 15, fontWeight: 400}}>
            {route.params.item.strCategoryDescription}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default DetailScreen

const styles = StyleSheet.create({
  imgView: {
    height: 450,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ddd',
  },
  category: {
    height: 35,
    margin: 5,
    backgroundColor: 'white'
  },
  dHeader: {
    height: 30,
    margin: 5,
    backgroundColor: 'white'
  }, 
  discriptionView: {
    height: 400,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',

  }
})