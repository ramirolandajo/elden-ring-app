import {FlatList, Platform, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import categories from '../data/categories.json';
import Category from "../components/Category";
import {colors} from "../global/colors";
import Constants from "expo-constants";

export default function CategoryList({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <Category categoryName={item} navigation={navigation}/>
                )}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
            />
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
