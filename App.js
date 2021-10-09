import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import Profiles from './src/screen/Profiles';
import ViewProfile from './src/screen/ViewProfile';
import { ProfileContext } from './src/state/ProfileContext';

const App = () => {

  const RootStack = createStackNavigator();

  const [allData, setAllData] = useState([
    {
      image: 'https://reactnative.dev/img/tiny_logo.png',
      name: "123",
      companyName: "abcd",
      email: '22@g.com',
      website: 'google.com',
      username: '123',
      phone: 123456789,
      address: 'abcddd'
    },
    {
      image: 'https://reactnative.dev/img/tiny_logo.png',
      name: "456",
      companyName: "efgh",
      email: '11@g.com',
      website: 'google.com',
      username: '456',
      phone: 123456789,
      address: 'abcddd'
    },
    {
      image: 'https://reactnative.dev/img/tiny_logo.png',
      name: "789",
      companyName: "ijkl",
      email: '33@g.com',
      website: 'google.com',
      username: '789',
      phone: 123456789,
      address: 'abcddd'
    }
  ]);
  
  const [data, setData] = useState(allData);

  useEffect(() => {

    async function getData() {
      try {
        let apiCall = await axios.get('http://www.mocky.io/v2/5d565297300000680030a9');
        if (apiCall.status === 200) {
          setAllData(apiCall.data)
        }
      } catch (error) {
        console.log(error.response)
      }
    }

    getData();

  }, []);

  const filter = (text) => {
    if (text) {
      let filtered = allData.filter((item) => {
        return item.name === text || item.email === text;
      });
      if (filtered.length > 0) {
        setData(filtered);
        Keyboard.dismiss();
      } else {
        setData([]);
      }
    } else {
      setData(allData);
    }
  };

  return (
    <ProfileContext.Provider value={{data, filter}}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name={'Profiles'}
            component={Profiles}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name={'ViewProfile'}
            component={ViewProfile}
            options={{
              headerTitle: 'View Profile'
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ProfileContext.Provider>
  );
};

export default App;
