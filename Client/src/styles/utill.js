import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const padding = {
  container: {
    paddingBottom: screenHeight * 0.14,
  },
};

export default padding;
