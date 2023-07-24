import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Buttons from "../../components/Button";
import STYLES from "../../constants/Styles";

const Home = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <SafeAreaView>
            <View style={styles.photoContainer}>
                <Image
                    style={styles.profileImage}
                    resizeMode="cover"
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1690761600&Signature=YD9jEj1VIPrRBK9pq2yatgYRMiSzpsKkggtJ-e79I-xlM8P9X4TeVwLs~RPJ922Ycn1TaXdgneZB15UfF5D7YN9r4njvpHAiHlRvH9F9urcRuRlyHbFltcwyAxHE2TX0u7PWSyFQAMcIv6A-8FJfLqguF9wuzaOEWk-iskg8xCf5nRYMlhtaYSgthAhK7BclpMWQcNQjJHyd4S44hsJTQ~NkzLWPuXsfFlM49EUtdiucwcg~fmkvJbc47AEE9T8evc5KJXm9wtvPVJZ3r4vWkuvKko7yFCD1YfPL7kdcBoi0spRxDLDBFs67oJwanEzlKstPuQGaNao7Ko1vc6QXkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                />

                <View style={styles.profileContainer}>
                    <Text style={styles.profileName}>Jane</Text>

                    <Text style={styles.locationName}>
                        SAN FRANCISCO, CA
                    </Text>

                </View>
            </View>

            <View style={styles.actionButtons}>
                <Buttons
                    styleButton={STYLES.filledButton}
                    styleText={STYLES.lighText}
                    title="FOLLOW JANE"
                    onPress={() => navigation.navigate('Register')}
                />

                <Buttons
                    styleButton={STYLES.outlinedButton}
                    styleText={STYLES.darkText}
                    title="MESSAGE"
                    onPress={() => navigation.navigate('Chat')}
                />
            </View>

            <View style={styles.postsArea}>
                <Image
                    style={styles.imagesList}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/2ade/0d98/e2d017549828f132dd9448107195c2c4?Expires=1690761600&Signature=c9pFb1yDeZftvxP62-b71Nv0xKWTUVbXQiF6YUtTeb0zSOd~XzFtb6fD2c-qeE5WgXEEnpEh8CtjDor9JggttyhZd9DSBn4dexj6F3U3c-MAqRRspifDFI3~PbHfURxqzDPddgKLMrKnG5fRIm6pdodEgtlqrwCIc5HpS~AwhSdX1DGo4rDL3gEtxkmGCFl-df5zBECIb4ti61~5jxvT~11nfJ0~b1hGZrgzXy5XznimVqnIqoYpoTy6rMp~pmlxyC6jwSVTNRdAgN2Y4oKMF9x~edURkL6yTmGZLqilkHV2Ed-12nHLfYYT0OMeeLYDSjiNiaDUKeC9zlPxRnP1SQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                />

                <Image
                    style={styles.imagesList}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/4617/a4ed/0486a26c76e2f11f0a3c218ce8b03e0f?Expires=1690761600&Signature=MrU4p8w9YZ922OrWaWXdaTRHdkmrdk4KswXJulxdKpksp4H2k-3q8awV1mJgW33bTftZlmRRLMccjU7u3gN6BXNkwanT8~7-CtXWJMq6k-oe2Rk8Nl3rsDoGRPHmDCDV3LbBOznvO~DY25Yw3CyLJZXianY0QbDxc5zyf2doDvljuQAD4LrNnjtYpfHCYS63D3YkSH7Sjs-C6Q0OhlHKahdUvKlpQIACUeeysiuGMjEg4RJu8UdODuZNtktRnpYYuZOW0rhbGaap8M-cafDCnDjfbh1TG3HN2WDm~rFMPlNZ80q7w0IuRA7OLuxnbq26HwM-hWZv1XorQkMiLbPl4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    photoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 32
    },

    profileImage: {
        borderRadius: 70,
        height: 140,
        marginBottom: 26
    },

    profileContainer: {
        marginBottom: 32,
    },

    profileName: {
        textAlign: 'center',
        fontFamily: 'Comfortaa_500Medium',
        fontSize: 36
    },

    locationName: {
        textAlign: 'center',
        paddingTop: 16,
        fontFamily: 'Roboto_900Black',
        fontSize: 14
    },

    actionButtons: {
        marginBottom: 32
    },

    postsArea: {
        flexDirection: "row",
        gap: 9,
    },

    imagesList: {
        flex: 1,
        minWidth: 167,
        // minHeight: 265,
        minHeight: '45%',
        resizeMode: 'cover',
    }

})

export default Home;