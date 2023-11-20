import React from 'react';
import { ScrollView, View } from 'react-native';

import { ImageCard } from './index';

import styles from '../styles/ImageList';

const ImageList = ({ images }) => {
  return (
    <ScrollView style={styles.container}>
      {images.map((image) => (
        <ImageCard key={image._id} image={image} />
      ))}
      <View style={styles.placeHolder}></View>
    </ScrollView>
  );
};

export default ImageList;
