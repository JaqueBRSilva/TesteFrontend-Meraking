import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ChatItems {
    userPhoto: string | any;
    userName: string;
    textLine: string;
}

const ChatsList: React.FC<ChatItems> = ({ ...props }) => {
    return (
        <>
            <TouchableOpacity
                style={styles.itemList}
                onPress={() => { }}
            >
                <Image
                    style={styles.photoSize}
                    source={props.userPhoto}
                />

                <View style={styles.textGroup}>

                    <Text style={styles.personName}>
                        {props.userName}
                    </Text>

                    <Text style={styles.chatText}>
                        {props.textLine}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 16,
        borderStyle: 'solid',
        borderBottomWidth: 0.55,
        borderColor: 'rgba(0, 0, 0, 0.30)'
    },

    photoSize: {
        width: 64,
        height: 64,
        borderRadius: 32,
        paddingVertical: 16
    },

    textGroup: {
        flexDirection: 'column',
        paddingLeft: 16,
    },

    personName: {
        color: '#000',
        fontFamily: 'Roboto_700Bold',
        fontSize: 14,
        paddingBottom: 6
    },

    chatText: {
        color: '#000',
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        textAlign: 'left',
        width: 265,
    }

})

export default ChatsList;