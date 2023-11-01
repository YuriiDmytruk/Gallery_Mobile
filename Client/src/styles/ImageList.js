import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  container: {
    paddingTop: screenHeight * 0.02,
  },

  placeHolder: {
    width: '100%',
    height: screenHeight * 0.16,
    backgroundColor: 'transparent',
  },
};

export default styles;
