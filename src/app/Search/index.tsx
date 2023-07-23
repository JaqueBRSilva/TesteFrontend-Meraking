import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
    return (
        <SafeAreaView style={styles.contentPage}>
            <Text style={styles.titlePage}> Search </Text>
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

export default Search;