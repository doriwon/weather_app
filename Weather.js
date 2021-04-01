import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconNmae: "weather-hail"
    }
}
export default function Weather({ temp }) {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.container}>
            <StatusBar barStyle="white-content" />
            <View style={styles.halfContaioner}>
                <MaterialCommunityIcons name="weather-rainy" size={90} color="white" />
                <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={styles.halfContaioner}>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Fog"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 37,
        color: "white",
        fontWeight: "300"
    },
    halfContaioner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})