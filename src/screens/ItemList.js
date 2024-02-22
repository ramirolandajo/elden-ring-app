import {
    Dimensions,
    FlatList,
    Image,
    Platform,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React, {useEffect, useState} from 'react'
import Item from "../components/Item";
import {colors} from "../global/colors";
import {AntDesign} from '@expo/vector-icons';
import Constants from "expo-constants";

export default function ItemList({navigation, route}) {

    const [data, setData] = useState([])
    const {categoryName} = route.params;

    useEffect(() => {
        fetch(`https://eldenring.fanapis.com/api/${categoryName}?limit=100`)
            .then((res) => res.json())
            .then((parsedData) => {
                setData(parsedData.data)
            })
            .catch((error) => console.error(error))
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesign name={"leftcircle"} size={32} color={colors.gold_200}/>
                </Pressable>
                <Text style={styles.categoryTitle}>{categoryName}</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <Item
                        itemName={item.name}
                        itemImage={item.image}
                        navigation={navigation}
                        id={data.indexOf(item)}
                        data={data}/>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginBottom: 16,
        flexDirection: "row",
        marginHorizontal: 16
    },
    categoryTitle: {
        fontSize: 50,
        textTransform: "capitalize",
        fontFamily: "Elden",
        color: colors.gold_200,
        marginLeft: 20
    },
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
})