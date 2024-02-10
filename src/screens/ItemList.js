import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import Item from "../components/Item";
import {colors} from "../global/colors";
import {AntDesign} from '@expo/vector-icons';
import DetailedItem from "../components/DetailedItem";

export default function ItemList({category, fetchURL, setScreen}) {

    const [data, setData] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        fetch(`${fetchURL}?limit=100`)
            .then((res) => res.json())
            .then((parsedData) => {
                setData(parsedData.data)
            })
            .catch((error) => console.error(error))
    }, []);

    return (selectedItem) ? (
        <DetailedItem item={selectedItem} setSelectedItem={setSelectedItem}/>
    ) : (
        <View>
            <View style={styles.header}>
                <Pressable onPress={() => setScreen("")}>
                    <AntDesign name={"leftcircle"} size={32} color={colors.gold_200}/>
                </Pressable>
                <Text style={styles.categoryTitle}>{category}</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <Item itemName={item.name} itemImage={item.image} setSelectedItem={setSelectedItem}
                          id={data.indexOf(item)} data={data}/>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
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
    }
})
