/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  Icon,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

import data from './data.js';

const App: () => React$Node = () => {
  const [index, setIndex] = useState(0);

  const getRandomCard = (input) => {
    let newNum = Math.floor(Math.random() * (input.length - 1) + 1);
    console.log(newNum);
    if (newNum !== index) {
      setIndex(newNum);
      return;
    } else return getRandomCard(input);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{data[index].title}</Text>
            <Image source={data[index].image} style={styles.images} />
            <FontAwesomeIcon icon={faCoffee} />

            <Button
              title="New Card"
              style={styles.button}
              onPress={() => getRandomCard(data)}
            />
            <Text style={styles.sectionTitle}>{data[index].description}</Text>
            <Text style={styles.bottomTitle}>{data[index].title}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    display: 'flex',
    alignItems: 'center',
  },
  sectionTitle: {
    flex: 1,
    fontSize: 32,
    fontWeight: '600',
    width: '100%',
    color: 'black',
  },
  bottomTitle: {
    flex: 1,
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    width: '100%',
    textAlign: 'left',
    transform: [{rotateX: '180deg'}],
    transform: [{rotateY: '180deg'}],
  },
  images: {
    flex: 3,
    height: 50,
    width: '100%',
    resizeMode: 'cover',
  },
  buton: {
    flex: 1,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
