import {Platform, Pressable, SafeAreaView, StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";
import Constants from "expo-constants";
import {useDispatch, useSelector} from "react-redux";
import Card from "../components/Card";
import {decrement, increment} from "../features/hoursPlayed/hoursPlayedSlice";

export default function StatsScreen() {
    const hoursPlayed = useSelector((state) => state.hoursPlayedReducer.value)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            <Card>
                <Text style={styles.text}>Hours Played: {hoursPlayed}</Text>
            </Card>
            <Card style={styles.buttons}>
                <Pressable onPress={() => dispatch(decrement())}>
                    <Text style={styles.symbol}>-</Text>
                </Pressable>
                <Text style={styles.symbol}>|</Text>
                <Pressable onPress={() => dispatch(increment())}>
                    <Text style={styles.symbol}>+</Text>
                </Pressable>
            </Card>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main_black,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
    text: {
        fontFamily: "Elden",
        fontSize: 36
    },
    symbol: {
        fontSize: 50
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: "space-around",
    }
})
