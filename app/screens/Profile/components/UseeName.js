import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Colors } from "../../../styles/colors";

const Connstion = () => {
    return (
        <View style={styles.userName}>

            <Text style={[styles.name, styles.shadow]}>Malik Asad Mumtaz</Text>

            <Text style={[styles.username, styles.shadow]}>@asadmumtaz92</Text>

        </View>
    )
}

export default Connstion

const styles = StyleSheet.create({
    userName: {
        marginTop: 10,
    },
    name: {
        fontWeight: 'bold',
        alignSelf: 'center',
        letterSpacing: 1,
        fontSize: 24,
    },
    username: {
        alignSelf: 'center',
        fontWeight: '200',
        fontSize: 22,
        marginTop: 8,
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowRadius: 5,
        elevation: 5,
    },

})