import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  container: {
    paddingTop: screenHeight * 0.03,
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    width: screenWidth,
    flex: 0.8,
  },
  text: {
    paddingLeft: screenWidth * 0.05,
  },
  nickName: {
    paddingBottom: screenHeight * 0.03,
    textAlign: 'center',
  },
  button: {
    width: screenWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
