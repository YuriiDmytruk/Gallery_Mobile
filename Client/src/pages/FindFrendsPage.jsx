import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const FindFrendsPage = () => {
    const theme = useTheme();
    return (
        <View>
            <Text style={{ backgroundColor: theme.colors.primary, color: theme.colors.onPrimary}}>
                FindFrendsPage
            </Text>
        </View>
    )
}

export default FindFrendsPage