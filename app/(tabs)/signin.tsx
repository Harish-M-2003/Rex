import { Text, View , TextInput , StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({

    inputStyle : {
        borderColor : "lightgray",
        borderWidth : 2 , 
        padding : 10 , 
        borderRadius : 10,
    },

    buttonStyle : {
        backgroundColor : "rgb(117 , 4, 226)",
        paddingHorizontal : 150,
        paddingVertical : 15,
        borderRadius : 10,
    },

});

export default function Signin() {
    return (
        <SafeAreaView style={{ flex: 1  , backgroundColor : "white"}}>
            <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
                <View style={{gap : 10}}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome Back !!</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum omnis nihil quos</Text>
                </View>
                <View style={{flex : 1  , justifyContent : "center" , gap : 20}}>
                    <TextInput placeholder="firstname" style={styles.inputStyle}/>
                    <TextInput placeholder="firstname" style={styles.inputStyle}/>
                
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{color : "white"}}>Login</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection : "row" , justifyContent : "center" , gap : 5}}>
                        <Text>Already Have an Account?</Text>
                        <Text style={{color : "rgb(117 , 4 ,226)"}}>Sign up</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}