import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemList = ({ taskList }) => {

    const handleItemListModal = () => {

    }

    return (
        <View style={styles.taskContainer}>
            <FlatList
                style={styles.flatlist}
                data={taskList}
                keyExtractor={task => task.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={styles.cardTask}
                        onPress={handleItemListModal(item)}>

                        <Text style={styles.taskText}>{item.value}</Text>
                    </TouchableOpacity>

                }
            />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10

    },
    flatlist: {
        width: '100%',
        backgroundColor: 'black'
    },
    cardTask: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#cccccc",
        width: '100%',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    taskText: {
        backgroundColor:'green',
        fontWeight: "bold",
        fontSize: 16
    }

})