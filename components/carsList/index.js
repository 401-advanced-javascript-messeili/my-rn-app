import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../carItem/index.js';

function CarsList(props) {
  console.warn('Hi');
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item, index }) => <CarItem item={item} />}
        keyExtractor={(item, index) => item.name}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarsList;
