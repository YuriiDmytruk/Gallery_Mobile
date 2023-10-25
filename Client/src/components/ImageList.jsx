import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ImageCard } from './index';

import styles from '../styles/ImageList';

const ImageList = ({ images }) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
      <View style={styles.placeHolder}></View>
    </ScrollView>
  );
};

export default ImageList;
