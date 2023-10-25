import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ImageList } from '../components/index';

import padding from '../styles/utill';
import { getImages } from '../util/api';

const MyGaleryPage = () => {
  const [images, setImages] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    getImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <View style={{ backgroundColor: theme.colors.onPrimary }}>
      <ImageList images={images} />
    </View>
  );
};

export default MyGaleryPage;
