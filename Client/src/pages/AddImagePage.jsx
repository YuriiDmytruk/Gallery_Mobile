import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import { ImageCard } from '../components/index';

import styles from '../styles/AddImagePage';
import { postImage } from '../util/api';

const AddImagePage = () => {
  const theme = useTheme();
  const author = 'author';

  const [image, setImage] = useState({
    url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    description: 'Tree',
    popularity: -1,
    author: author,
  });

  const onAddClick = () => {
    postImage(image);
  };

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.gap}
          label="Image url"
          value={image.url}
          onChangeText={(text) => setImage({ ...image, url: text })}
        />
        <TextInput
          style={styles.gap}
          label="Description"
          value={image.description}
          onChangeText={(text) => setImage({ ...image, description: text })}
        />
      </View>
      <ImageCard style={styles.gap} image={image} />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={onAddClick}
        >
          <Text style={{ fontSize: 20 }}>ADD</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default AddImagePage;

/*
<View>
        <TextInput
          label="Image url"
          value={image.url}
          onChangeText={(text) => setImage({ ...image, url: text })}
        />
        <TextInput
          label="Alt"
          value={image.alt}
          onChangeText={(text) => setImage({ ...image, alt: text })}
        />
      </View>
      */
