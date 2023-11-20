import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    marginTop: screenHeight * 0.02,
    borderRadius: 20,
  },

  placeHolder: {
    width: '100%',
    height: screenHeight * 0.16,
    backgroundColor: 'transparent',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  downContainer: {
    height: screenHeight * 0.05,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  authorText: {
    fontSize: screenHeight * 0.03,
    fontWeight: 'bold',
  },

  image: {
    borderRadius: 30,
  },
};

export default styles;
