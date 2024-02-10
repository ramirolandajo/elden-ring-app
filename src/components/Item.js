import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Card from "./Card";

export default function Item({itemName, itemImage, setSelectedItem, data, id}) {
    return (
        <Pressable onPress={() => setSelectedItem(data[id])}>
            <Card style={styles.main}>
                <Text style={styles.itemName}>{itemName}</Text>
                <Image source={{uri: itemImage}} style={styles.image}/>
            </Card>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    itemName: {
        textTransform: "capitalize",
        fontSize: 25,
        fontFamily: "Elden",
        width: "60%"
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
