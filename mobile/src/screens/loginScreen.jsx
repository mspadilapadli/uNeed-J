import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen({ navigation }) {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{
                        // backgroundColor: "grey",
                        padding: 20,
                        borderRadius: 15,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            marginBottom: 40,
                            textAlign: "center",
                            // color: "white",
                        }}
                    >
                        uNeed-J{" "}
                    </Text>
                    <TextInput
                        placeholder=" Email"
                        style={{
                            height: 45,
                            backgroundColor: "white",
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    />
                    <TextInput
                        placeholder=" Password"
                        style={{
                            height: 45,
                            backgroundColor: "white",
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    />
                    <TouchableOpacity
                        style={{}}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text
                            style={{
                                backgroundColor: "#00A9FF",
                                paddingVertical: 15,
                                color: "white",
                                textAlign: "center",
                                borderRadius: 5,
                                marginBottom: 10,
                                marginTop: 10,
                            }}
                        >
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            paddingVertical: 10,
                            color: "gray",
                            textAlign: "center",
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    >
                        Forgot Password ?
                    </Text>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text
                            style={{
                                backgroundColor: "white",
                                paddingVertical: 15,
                                color: "#00A9FF",
                                textAlign: "center",
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                        >
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
