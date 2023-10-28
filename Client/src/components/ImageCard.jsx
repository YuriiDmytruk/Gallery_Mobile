import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import styles from '../styles/ImageCard';

const ImageCard = ({ image }) => {
  const [imageSource, setImageSource] = useState(
    require('../images/placeHolder.png')
  );
  const theme = useTheme();

  useEffect(() => {
    const verifyURL = async () => {
      try {
        const response = await fetch(image.url);
        if (response.ok) {
          setImageSource({ uri: image.url });
        } else {
          setImageSource(require('../images/errorImage.png'));
        }
      } catch (error) {
        setImageSource(require('../images/errorImage.png'));
      }
    };

    verifyURL();
  }, [image.url]);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.primary }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={imageSource}
          width={Dimensions.get('window').width}
        />
      </View>
      <View style={styles.authorContainer}>
        <Text style={{ ...styles.authorText, color: theme.colors.onPrimary }}>
          {image.authorName}
        </Text>
      </View>
    </View>
  );
};

export default ImageCard;
