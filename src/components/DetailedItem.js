import {Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";
import {AntDesign} from "@expo/vector-icons";

export default function DetailedItem({item, navigation}) {

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={{marginBottom: 16}}>
                <AntDesign name={"leftcircle"} size={32} color={colors.gold_200}/>
            </Pressable>
            <ScrollView contentContainerStyle={styles.main} showsVerticalScrollIndicator={false}>
                <Image source={{uri: item.image}} style={styles.image}/>
                <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 16,
        flex: 1
    },
    main: {
        alignItems: "center",
        paddingBottom: 20
    },
    image: {
        width: 250,
        height: 250
    },
    itemName: {
        fontSize: 50,
        textTransform: "capitalize",
        fontFamily: "Elden",
        color: colors.gold_200,
        textAlign: "center",
        marginVertical: 16
    },
    description: {
        fontSize: 22,
        color: colors.gold_200,
        textAlign: "justify"
    }
})
