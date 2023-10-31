import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { ImageCard } from '../components/index';

import styles from '../styles/AddImagePage';
import { postImage } from '../util/api';

const AddImagePage = () => {
  const theme = useTheme();
  const user = useSelector((state) => state.user);

  const [image, setImage] = useState({
    url: 'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg',
    description: 'Tree',
    authorName: user.nickName,
    authorId: user._id
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
        <Button mode="contained" style={styles.button} onPress={onAddClick}>
          <Text style={{ fontSize: 20 }}>ADD</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default AddImagePage;
