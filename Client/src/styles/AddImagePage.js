import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  inputContainer: {
    paddingTop: screenHeight * 0.02,
    fex: 1,
  },

  gap: {
    marginTop: screenHeight * 0.02,
  },

  button: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.06,
    fontSize: screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 1,
    marginTop: screenHeight * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
