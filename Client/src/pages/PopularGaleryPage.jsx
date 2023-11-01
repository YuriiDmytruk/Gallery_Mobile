import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ImageList } from '../components/index';

import { getImages } from '../util/api';

const MyGaleryPage = () => {
  const [images, setImages] = useState([]);
  const theme = useTheme();

  const loadImages = () => {
    getImages('', '20').then((data) => {
      setImages(data);
    });
  }

  useEffect(() => {
    loadImages()
  }, []);

  const onReloadClick = () => {
    loadImages()
  }

  return (
    <View style={{ backgroundColor: theme.colors.onPrimary }}>
      <ImageList images={images} />
    </View>
  );
};

export default MyGaleryPage;
