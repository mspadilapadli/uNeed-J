import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RegisterScreen({ navigation }) {
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
                            color: "gray",
                        }}
                    >
                        Register
                    </Text>
                    <TextInput
                        placeholder=" Name"
                        style={{
                            height: 40,
                            backgroundColor: "white",
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    />
                    <TextInput
                        placeholder=" Username"
                        style={{
                            height: 40,
                            backgroundColor: "white",
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    />
                    <TextInput
                        placeholder=" Email"
                        style={{
                            height: 40,
                            backgroundColor: "white",
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    />
                    <TextInput
                        placeholder=" Password"
                        style={{
                            height: 40,
                            backgroundColor: "white",
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    />
                    <TouchableOpacity style={{}}>
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
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
