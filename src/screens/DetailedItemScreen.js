import {Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import elden_ring_logo from "../../assets/elden-ring-logo.png";
import DetailedItem from "../components/DetailedItem";
import {colors} from "../global/colors";
import Constants from "expo-constants";

export default function DetailedItemScreen({navigation, route}) {
    const {item} = route.params
    console.log(item)
    return (
        <SafeAreaView style={styles.container}>
            <DetailedItem item={item} navigation={navigation}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main_black,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    }
})
