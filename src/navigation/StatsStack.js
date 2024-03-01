import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Card from "../components/Card";
import StatsScreen from "../screens/StatsScreen";

export default function StatsStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={'stats'} component={StatsScreen}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
