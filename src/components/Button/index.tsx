import { Text, TouchableOpacity } from "react-native";

interface IButtonProps {
    styleButton: string | any;
    styleText: string | any;
    title: string;
    onPress: () => void;
}

const Buttons: React.FC<IButtonProps> = ({ ...props }) => {
    return (
        <>
            <TouchableOpacity
                style={props.styleButton}
                onPress={props.onPress}
            >
                <Text style={[props.styleText]}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default Buttons;