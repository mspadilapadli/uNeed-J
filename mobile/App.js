import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
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

function RegisterScreen({ navigation }) {
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
        // <View
        //     style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        // >
        //     <Button
        //         title="Sumbmit"
        //         onPress={() => navigation.navigate("Login")}
        //     />
        // </View>
    );
}

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Screen</Text>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
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
