import {StatusBar, View, StyleSheet, Text} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import ItemsStack from "./ItemsStack";
import {colors} from "../global/colors";
import {AntDesign} from "@expo/vector-icons";
import StatsStack from "./StatsStack";

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar style="light"/>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name={'items'}
                    component={ItemsStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.tabContainer}>
                                    <AntDesign name="aliwangwang-o1" size={30} color={focused ? "black" : "gray"} />
                                    <Text style={{ color: focused ? "black" : "grey" }}>Items</Text>
                                </View>
                            );
                        }
                    }}
                />
                <Tab.Screen
                    name={'tracking'}
                    component={StatsStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.tabContainer}>
                                    <AntDesign name="user" size={30} color={focused ? "black" : "gray"} />
                                    <Text style={{ color: focused ? "black" : "grey" }}>Stats</Text>
                                </View>
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.gold_100,
        height: 70,
    },
    tabContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

