import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    style : Object,
    title : String,
};

export default function AppButton({style , title} : ButtonProps){

    return (
        <TouchableOpacity style={style}>
            <Text style={{flex : 1 }}>{title}</Text>
        </TouchableOpacity>
    );

}