import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ItemCard from "../components/ItemCard";
import { gql, useQuery } from "@apollo/client";

const Tab = createBottomTabNavigator();
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
        title: "Fourth Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6c",
        title: "Fift Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d7d",
        title: "Six Item",
    },

    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
        title: "7 Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
        title: "8 Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "9 Item",
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b4",
        title: "10 Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
        title: "11 Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d76",
        title: "12 Item",
    },
];

const GET_POST = gql`
    query GetPosts {
        getPosts {
            _id
            content
            tags
            imgUrl
            authorId
            comments {
                content
                username
                createdAt
                updatedAt
            }
            likes {
                username
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
            author {
                _id
                name
                username
                email
            }
        }
    }
`;

function HomeTab({ navigation }) {
    const { loading, error, data } = useQuery(GET_POST);

    console.log(loading, error, data);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator size={"large"} />
            </View>
        );
    }
    if (error) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Something went wrong</Text>
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data.getPosts}
                renderItem={({ item }) => {
                    return <ItemCard item={item} />;
                }}
                //  renderItem={({ item }) => {
                //      <TouchableOpacity
                //          onPress={() => {
                //              navigation.navigate("PostDetail", { id: item.id });
                //          }}
                //      >
                //          <ItemCard item={item} />;
                //      </TouchableOpacity>;
                //  }}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </View>
    );
}

function AddPost() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>AddPost</Text>
        </View>
    );
}

function Profile() {
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
                        title: "uNeed-J",
                    }}
                />
                <Tab.Screen
                    name="Post"
                    component={AddPost}
                    options={{
                        tabBarIcon: ({ focused, size }) => {
                            return (
                                <AntDesign
                                    name="pluscircleo"
                                    color={focused ? "#00A9FF" : "gray"}
                                    size={size}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused, size }) => {
                            return (
                                <AntDesign
                                    name="user"
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
