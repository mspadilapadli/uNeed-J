import { StyleSheet, Text, View } from "react-native";

export default function ItemCard({ item }) {
    //  console.log(item, "item itemcard");
    return (
        <View style={styles.item}>
            <Text style={styles.title}> {item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#f9c2ff",
        padding: 100,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 32,
    },
});
