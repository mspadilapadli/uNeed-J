import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

function HomeTab() {
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

export default function Home() {
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
                    name="Home Tab"
                    component={HomeTab}
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
                    }}
                />
            </Tab.Navigator>
        </>
        //   </NavigationContainer>
    );
}
