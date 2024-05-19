import { Button, Text  , View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white"
    },

    textStyle : {
        fontSize : 60,
        fontWeight : "bold",
    },

    textColor : {
        color : "rgb(117, 4, 226)"
    },

    buttonStyle : {
        backgroundColor : "rgb(117 , 4, 226)",
        paddingHorizontal : 140,
        paddingVertical : 10,
        borderRadius : 10,
    },

    termsOfService : {
        color : "gray",
        margin : 5,
    },

})

export default function Login(){

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex : 0.9 , padding : 10}}>
                <View style={{flex : 4 , justifyContent : "center" , alignItems : "center"}}>
                    <View style={{height : 200 , width : 200 , backgroundColor : "lightgray" , marginBottom : 10}}/>
                    <View style={{flexDirection : "row", gap : 20 , marginTop : 50}}>
                        <Text style={[styles.textStyle , styles.textColor]}>Earn</Text>
                        <Text style={styles.textStyle}>While</Text>
                    </View>
                    <View style={{flexDirection : "row", gap : 20}}>
                        <Text style={styles.textStyle}>You</Text>
                        <Text style={[styles.textStyle , styles.textColor]}>Spend</Text>
                    </View>
                </View>
                <View style={{flex : 1 , alignItems : "center" , gap : 10}}>
                    <Text style={styles.termsOfService}>
                        Welcome to Rex! By using this app, you agree to the following terms and conditions.
                    </Text>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{color : "white"}}>Get Started</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity> */}
                        <Text>Lorem ipsum dolor</Text>
                    {/* </TouchableOpacity> */}
                </View>
            </View>
        </SafeAreaView>
    );
}
