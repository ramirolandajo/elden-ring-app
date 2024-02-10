import {StatusBar} from 'expo-status-bar';
import {Dimensions, Image, Platform, SafeAreaView, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {colors} from './src/global/colors';
import elden_ring_logo from './assets/elden-ring-logo.png';
import CategoryList from "./src/screens/CategoryList";
import {fonts} from "./src/global/fonts";
import {useFonts} from 'expo-font';
import {useState} from "react";
import ItemList from "./src/screens/ItemList";

export default function App() {

    const [fontsLoaded, fontError] = useFonts(fonts);
    const [screen, setScreen] = useState("")

    if (!fontsLoaded && !fontError) {
        return null;
    }

    switch (screen) {
        case "":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <CategoryList setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "armors":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"armors"} fetchURL={"https://eldenring.fanapis.com/api/armors"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "ashes":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"ashes"} fetchURL={"https://eldenring.fanapis.com/api/ashes"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "incantations":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"incantations"} fetchURL={"https://eldenring.fanapis.com/api/incantations"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "sorceries":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"sorceries"} fetchURL={"https://eldenring.fanapis.com/api/sorceries"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "items":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"items"} fetchURL={"https://eldenring.fanapis.com/api/items"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "spirits":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"spirits"} fetchURL={"https://eldenring.fanapis.com/api/spirits"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "talismans":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"talismans"} fetchURL={"https://eldenring.fanapis.com/api/talismans"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "shields":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"shields"} fetchURL={"https://eldenring.fanapis.com/api/shields"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        case "weapons":
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light"/>

                    <Image style={styles.logo} source={elden_ring_logo}/>
                    <ItemList category={"weapons"} fetchURL={"https://eldenring.fanapis.com/api/weapons"} setScreen={setScreen}/>
                </SafeAreaView>
            )
        default:
            return null
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main_black,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
    logo: {
        width: Dimensions.get("window").width,
        height: "15%",
        resizeMode: 'contain'
    }
});
