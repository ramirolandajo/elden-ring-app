import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function Card({children, style}) {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 16,
        shadowColor: colors.gold_100,
        backgroundColor: colors.gold_200,
        borderColor: "black",
        borderWidth: 1,
        elevation: 10,
        padding: 10,
    }
})
