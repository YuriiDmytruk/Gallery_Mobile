import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { ImageList } from '../components/index';

import padding from '../styles/utill';
import { getImages } from '../util/api';

const MyGaleryPage = () => {
  const [images, setImages] = useState([]);
  const user = useSelector((state) => state.user);
  const theme = useTheme();

  useEffect(() => {
    getImages(user).then((data) => {
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
