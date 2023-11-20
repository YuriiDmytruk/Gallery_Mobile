import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  buttonContainer: {
    paddingTop: screenHeight * 0.04,
    fex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  button: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.06,
    fontSize: screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
