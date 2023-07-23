import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <SafeAreaView style={styles.contentPage}>
            <Text style={styles.titlePage}> Profile </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contentPage: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    },

    titlePage: {
        fontSize: 26
    }

})

export default Profile;