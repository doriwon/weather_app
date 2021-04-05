import React from "react";
import { StyleSheet, Text, View } from 'react-native'; //, StatusBar 

export default function Loading() {
    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle="dark-content" /> */}
            <Text style={styles.text}>Getting the beautiful weather</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#22a6b3"
    },
    text: {
        color: "#fff",
        fontSize: 30
    }
})
