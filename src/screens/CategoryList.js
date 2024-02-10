import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import categories from '../data/categories.json';
import Category from "../components/Category";
export default function CategoryList({setScreen}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <Category categoryName={item} setScreen={setScreen}/>
                )}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
