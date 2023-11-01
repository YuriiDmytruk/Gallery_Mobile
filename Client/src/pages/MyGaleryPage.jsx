import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { ImageList } from '../components/index';

import { getImages } from '../util/api';

const MyGaleryPage = () => {
  const [images, setImages] = useState([]);
  const userId = useSelector((state) => state.user._id);
  const theme = useTheme();

  useEffect(() => {
    getImages(userId, '').then((data) => {
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
