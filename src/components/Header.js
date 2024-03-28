import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

//snipet: rnfes
const Header = ({ handleOpenModal }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Lista de Tareas</Text>
            </View>
            <TouchableOpacity
                style={styles.addTaskContainer}
                onPress={handleOpenModal}>
                <Text style={styles.addTaskText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {

    },
    titleText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    addTaskContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    addTaskText: {
        fontSize: 24,
        color: '#CE0930',
    },

})