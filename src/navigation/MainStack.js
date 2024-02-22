import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import CategoryList from "../screens/CategoryList";
import ItemList from "../screens/ItemList";
import DetailedItemScreen from "../screens/DetailedItemScreen";
import {Dimensions, Image, StatusBar,StyleSheet} from "react-native";
import elden_ring_logo from "../../assets/elden-ring-logo.png";
import {colors} from "../global/colors";

export default function MainStack() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <StatusBar style="light"/>
            <Stack.Navigator
                initialRouteName={"Categories"}
                screenOptions={ () => ({
                    header: () => {
                        return (
                            <Image style={styles.logo} source={elden_ring_logo}/>
                        )
                    }
                })
                }
            >
                <Stack.Screen name={"Categories"} component={CategoryList}/>
                <Stack.Screen name={"ItemList"} component={ItemList}/>
                <Stack.Screen name={"DetailedItemScreen"} component={DetailedItemScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: Dimensions.get("window").width,
        resizeMode: 'contain',
        backgroundColor: colors.main_black
    }
})
