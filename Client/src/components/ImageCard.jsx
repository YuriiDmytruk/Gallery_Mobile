import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';
import { Rating } from '@kolking/react-native-rating';
import { useSelector } from 'react-redux';

import { putScore } from '../util/api';
import styles from '../styles/ImageCard';

const ImageCard = ({ image }) => {
  const [imageSource, setImageSource] = useState(
    require('../images/placeHolder.png')
  );
  const userId = useSelector((state) => state.user._id);
  const theme = useTheme();

  const [rating, setRating] = useState(image.score ? image.score : 0);
  const isRatingDisabled = userId === image.authorId;

  const onRatingChange = (value) => {
    setRating(value);
    putScore({
      imageId: image._id,
      userId: userId,
      score: value,
    });
  };

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

  try {
    const user = JSON.parse(image.authorName);
    image = { ...image, authorName: user.nickName };
  } catch (error) {}

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
      <View style={styles.downContainer}>
        <Text style={{ ...styles.authorText, color: theme.colors.onPrimary }}>
          {image.authorName}
        </Text>
        <Rating
          size={23}
          rating={rating}
          onChange={onRatingChange}
          disabled={isRatingDisabled}
          fillColor={isRatingDisabled ? '#ccb562' : '#ffcc12'}
        />
      </View>
    </View>
  );
};

export default ImageCard;
