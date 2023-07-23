import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import Buttons from "../../components/Button";
import STYLES from "../../constants/Styles";

const Register = () => {
    const [email, setChangeEmail] = useState('')
    const [password, setChangePassword] = useState('')

    return (
        <>
            <Text style={styles.pageTitle}>
                Register
            </Text>

            <View style={styles.inputGroup}>

                <TextInput
                    style={styles.textInputs}
                    onChangeText={email => setChangeEmail(email)}
                    placeholder="Email address"
                    placeholderTextColor={'rgba(0, 0, 0, 0.50)'}
                    value={email}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.textInputs}
                    onChangeText={password => setChangePassword(password)}
                    placeholder="Create password"
                    placeholderTextColor={'rgba(0, 0, 0, 0.50)'}
                    value={password}
                    keyboardType="default"
                />

                <Buttons
                    styleButton={STYLES.filledButton}
                    styleText={STYLES.lighText}
                    title="NEXT"
                    onPress={() => { }}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pageTitle: {
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 36,
        paddingTop: 5,
        paddingBottom: 30,
    },

    inputGroup: {
        width: 'auto',
    },

    textInputs: {
        borderColor: '#000',
        borderWidth: 2,
        width: 'auto',
        height: 52,
        padding: 17,
        marginBottom: 16,
        justifyContent: 'center',
        fontSize: 15,
        fontFamily: 'Roboto_400Regular',
    },

})

export default Register;