import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../styledButton';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.item;
  return (
    <View style={styles.carcontainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type='primary'
          content={'Custom Order'}
          onPress={() => {
            console.warn('custom order was pressed');
          }}
        />

        <StyledButton
          type='secondary'
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
