import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  container: {
    paddingTop: screenHeight * 0.1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:30,
  },
  inputContainer:{
    flex: 1,
    paddingTop: screenHeight * 0.02,
  },
  input:{
    width: screenWidth * 0.8,
    marginTop: screenHeight * 0.03,
  },
  button:{
    marginTop: screenHeight * 0.03,
    width: screenWidth * 0.6,
    height: screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default styles;
