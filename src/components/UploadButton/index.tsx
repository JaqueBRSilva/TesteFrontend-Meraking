import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity } from "react-native";

interface UploadBtnProps {
    onPress: () => void;
}

const UploadButton: React.FC<UploadBtnProps> = ({ ...props }) => {
    return (
        <>
            <LinearGradient
                style={styles.buttonColor}
                colors={['#FF00D6', '#FF4D00']}
            >
                <TouchableOpacity
                    style={styles.iconColor}
                    onPress={props.onPress}
                >

                    <AntDesign name="plus" size={19} color={'#FFF'} />

                </TouchableOpacity>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    buttonColor: {
        width: 70,
        height: 40,
        borderRadius: 35
    },

    iconColor: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})

export default UploadButton;