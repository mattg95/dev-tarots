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
} from 'react-native';

import data from './data.js';

const getRandomCard = (input) => {
  return Math.floor(Math.random() * input.length);
};

const App: () => React$Node = () => {
  const [index, setIndex] = useState(0);
  console.log(data[index]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{data[index].title}</Text>
              <Image source={data[index].image} style={styles.images} />
              <Button
                title="New Card"
                onPress={() => setIndex(getRandomCard(data))}
              />
              <Text style={styles.sectionTitle}>{data[index].description}</Text>
              <Text style={styles.bottomTitle}>{data[index].title}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    height: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  bottomTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left',
    transform: [{rotateX: '180deg'}],
    transform: [{rotateY: '180deg'}],
  },
  images: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
