import { StyleSheet, Text, View, Image } from "react-native";

export default function ItemCard({ item }) {
    return (
        <View style={styles.item}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "gray",
                }}
            >
                <Text> {item.content}</Text>
            </View>
            <Image
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                style={styles.image}
            />

            <View style={{ flex: 2 }}>
                <Text> {item.tags}</Text>
            </View>
        </View>
    );
    // return (
    //     <View style={styles.card}>
    //         <Image
    //             source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //             style={styles.image}
    //         />
    //         <View style={styles.userInfo}>
    //             <Text style={styles.name}>{item.content}</Text>
    //             <Text style={styles.headline}>{item.content}</Text>
    //         </View>
    //     </View>
    // );
}

// const styles = StyleSheet.create({
//     card: {
//         flexDirection: "row",
//         backgroundColor: "#fff",
//         borderRadius: 8,
//         padding: 12,
//         marginBottom: 12,
//         shadowColor: "#000",
//         shadowOpacity: 0.1,
//         shadowOffset: { width: 0, height: 2 },
//         elevation: 2,
//     },
//     image: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         marginRight: 12,
//     },
//     userInfo: {
//         flex: 1,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: "bold",
//         marginBottom: 4,
//     },
//     headline: {
//         fontSize: 16,
//         color: "#666",
//     },
// });

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#f9c2ff",
        padding: 100,
        marginVertical: 5,
        // marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 12,
    },
});
