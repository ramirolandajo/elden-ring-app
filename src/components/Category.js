import {Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import Card from "./Card";

export default function Category({categoryName, setScreen}) {
    return (
        <Pressable onPress={() => setScreen(categoryName)}>
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
