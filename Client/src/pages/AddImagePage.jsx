import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const AddImagePage = () => {
    const theme = useTheme();
    return (
        <View>
            <Text style={{ backgroundColor: theme.colors.primary, color: theme.colors.onPrimary }}>
                AddImagePage
            </Text>
        </View>
    )
}

export default AddImagePage