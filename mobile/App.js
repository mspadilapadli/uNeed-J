import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";
// import HomeScreen from "./src/screens/home";
import Home from "./src/screens/homeTab";
import { ApolloProvider } from "@apollo/client";
import client from "./src/config/apolloConnection";

const Stack = createNativeStackNavigator();

export default function App() {
    const isLogin = false;

    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </ApolloProvider>
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
