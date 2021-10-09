import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const ViewProfile = ({ route }) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: route?.params?.image }} style={styles.img} />
        </View>
        <View style={styles.contentContainer}>
          <Text>Name: {route?.params?.name} </Text>
          <Text>Username: {route?.params?.username} </Text>
          <Text>Email-id: {route?.params?.email} </Text>
          <Text>Address: {route?.params?.address} </Text>
          <Text>Phone: {route?.params?.phone} </Text>
          <Text>Website: {route?.params?.website} </Text>
          <Text>Company Name: {route?.params?.companyName} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: '2%'
  },  
  container: {
    width: '100%',
    // flexDirection: 'row',
    marginBottom: '2%',
    backgroundColor: '#d7dade',
    padding: '2%',
  },
  imgContainer: {
    padding: '5%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 50
  },
  contentContainer: {
    padding: '5%',
    width: '100%',
    flexDirection: 'column'
  },
});

export default ViewProfile;
