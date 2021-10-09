import React, { useContext, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { ProfileContext } from '../state/ProfileContext';

const Profiles = ({ navigation }) => {

  const { data, filter } = useContext(ProfileContext);
  const [value, setValue] = useState('');

  const handleSearch = (text) => {
    setValue(text);
    filter(text);
  } 

  return (
    <View style={styles.subRoot}>
      <TextInput 
        style={styles.search}
        placeholder="Search"
        value={value}
        onChangeText={handleSearch}
      />
      <FlatList
        data={data}
        keyExtractor={(x, i) => i.toString()}
        renderItem= {({item}) => {
          return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ViewProfile', item)}>
              <View style={styles.imgContainer}>
                <Image source={{uri : item.image}} style={styles.img} />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.compyName}>{item.companyName}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subRoot: {
    padding: '2%'
  },  
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: '2%',
    backgroundColor: '#d7dade'
  },
  imgContainer: {
    width: '20%',
    flexDirection: 'column',
    // backgroundColor: 'blue'
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    width: '80%',
    flexDirection: 'column',
    paddingTop: '5%',
    paddingBottom: '5%'

  },
  name: {
    fontSize: 15,
    fontWeight: '700'
  },
  compyName: {
    fontSize: 13,
    fontWeight: '400'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  search: {
    borderWidth: 1,
    marginBottom: '4%'
  }
});

export default Profiles;
