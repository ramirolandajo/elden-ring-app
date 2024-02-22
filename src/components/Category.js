import {Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import Card from "./Card";

export default function Category({categoryName, navigation}) {
    return (
        <Pressable onPress={() => navigation.navigate("ItemList", {categoryName})}>
            <Card>
                <Text style={styles.categoryName}>{categoryName}</Text>
            </Card>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    categoryName: {
        textTransform: "capitalize",
        fontSize: 40,
        fontFamily: "Elden"
    }
})
