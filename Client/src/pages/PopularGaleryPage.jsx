import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const PopularGaleryPage = () => {
    const theme = useTheme();
    return (
        <View>
            <Text style={{ backgroundColor: theme.colors.primary, color: theme.colors.onPrimary }}>
                PopularGaleryPage
            </Text>
        </View>
    )
}

export default PopularGaleryPage