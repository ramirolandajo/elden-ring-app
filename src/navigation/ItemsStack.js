import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoryList from "../screens/CategoryList";
import ItemList from "../screens/ItemList";
import DetailedItemScreen from "../screens/DetailedItemScreen";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import elden_ring_logo from "../../assets/elden-ring-logo.png";
import {colors} from "../global/colors";

export default function ItemsStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={"Categories"}
            screenOptions={() => ({
                header: () => {
                    return (
                        <View style={{height: 80}}>
                            <Image style={styles.logo} source={elden_ring_logo}/>
                        </View>
                    )
                }
            })
            }
        >
            <Stack.Screen name={"Categories"} component={CategoryList}/>
            <Stack.Screen name={"ItemList"} component={ItemList}/>
            <Stack.Screen name={"DetailedItemScreen"} component={DetailedItemScreen}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: Dimensions.get("window").width,
        resizeMode: 'contain',
        backgroundColor: colors.main_black,
        height: "100%"
    }
})
