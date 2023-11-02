import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ImageList } from '../components/index';

import { getImages } from '../util/api';

const GaleryPage = (props) => {
  const [images, setImages] = useState([]);
  const theme = useTheme();
  const { userId, amount } = props.route.params;

  useEffect(() => {
    getImages(userId, amount).then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <View style={{ backgroundColor: theme.colors.onPrimary }}>
      <ImageList images={images} />
    </View>
  );
};

export default GaleryPage;
