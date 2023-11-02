import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  container: {
    paddingTop: screenHeight * 0.02,
  },
  input: {
    width: screenWidth * 0.8,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeHolder: {
    width: '100%',
    height: screenHeight * 0.13,
    backgroundColor: 'transparent',
  },
  messageContainer: {
    paddingTop: screenHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
