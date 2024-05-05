import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Feather } from "@expo/vector-icons";

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

export default function HomeTab() {
    return (
        //   <NavigationContainer>
        <Tab.Navigator>
            screenOptions =
            {() => {
                return {
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "#00A9FF",
                };
            }}
            <Tab.Screen
                name="Home2"
                component={Home2}
                options={{
                    tabBarIcon: ({ focused, size }) => {
                        <Feather
                            name="home"
                            color={focused ? "#00A9FF" : "gray"}
                            size={size}
                        />;
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
                        <Feather
                            name="settings"
                            color={focused ? "#00A9FF" : "gray"}
                            size={size}
                        />;
                    },
                    // tabBarInactiveTintColor: "gray",
                    // tabBarActiveTintColor: "#00A9FF",
                }}
            />
        </Tab.Navigator>
        //   </NavigationContainer>
    );
}
