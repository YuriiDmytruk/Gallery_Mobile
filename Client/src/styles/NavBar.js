import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    height: screenHeight * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: 'row',
  },
  containerSmall: {
    flex: 1,
    width: screenWidth * 0.4,
    height: screenHeight,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    borderRadius: 50,
    aspectRatio: 1,
    height: screenHeight * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -screenWidth * 0.045,
  },
  addButton: {
    borderRadius: 100,
    aspectRatio: 1,
    width: screenHeight * 0.12,
    borderWidth: 3,
    marginBottom: screenHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    marginBottom: screenWidth * 0.045,
  },
};

export default styles;
