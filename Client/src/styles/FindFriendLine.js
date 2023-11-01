import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
    userContainer:{
        marginTop: screenHeight * 0.03,
        paddingBottom: screenHeight * 0.02,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      },
      buttonContainer:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      }
};

export default styles;
