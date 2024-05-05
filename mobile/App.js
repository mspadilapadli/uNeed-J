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
// import HomeTab from "./src/screens/homeTab";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home2() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Home Tab!</Text>
        </View>
    );
}
function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings!</Text>
        </View>
    );
}

function HomeTab() {
    return (
        //   <NavigationContainer>
        <>
            <Tab.Navigator
                screenOptions={() => {
                    return {
                        tabBarInactiveTintColor: "gray",
                        tabBarActiveTintColor: "#00A9FF",
                    };
                }}
            >
                <Tab.Screen
                    name="Home2"
                    component={Home2}
                    options={{
                        tabBarIcon: ({ focused, size }) => {
                            return (
                                <AntDesign
                                    name="home"
                                    color={focused ? "#00A9FF" : "gray"}
                                    size={size}
                                />
                            );
                        },
                        // tabBarInactiveTintColor: "gray",
                        // tabBarActiveTintColor: "#00A9FF",
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ focused, size }) => {
                            return (
                                <AntDesign
                                    name="setting"
                                    color={focused ? "#00A9FF" : "gray"}
                                    size={size}
                                />
                            );
                        },
                        // tabBarInactiveTintColor: "gray",
                        // tabBarActiveTintColor: "#00A9FF",
                    }}
                />
            </Tab.Navigator>
        </>
        //   </NavigationContainer>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="HomeTab" component={HomeTab} />
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
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
