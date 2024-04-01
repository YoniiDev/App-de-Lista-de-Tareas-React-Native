import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import ModalConfirmDeleteTask from './ModalConfirmDeleteTask'


const ItemList = ({ taskList }) => {

    const [modalConfirmDeleteTaskVisible, setModalConfirmDeleteTaskVisible] = useState(false)
    const [taskSelected, setTaskSelected] = useState({})
    const handleEditTask = () => {

    }

    //Abre el Modal para eliminar la tarea seleccionada
    const handleModalConfirmDeleteTask = (item) => {
        setTaskSelected(item)
        setModalConfirmDeleteTaskVisible(true)
    }
    //Cierra el Modal de eliminar tarea
    const handleCancelModalConfirmDeleteTask = () => {
        setModalConfirmDeleteTaskVisible(false)
        setTaskSelected({})
    }

    //Elimina la tarea seleccionada
  const handleDeletedTask = () => {
    const filteredTaskList = taskList.filter(task => task !== taskSelected)
    setTaskList(filteredTaskList)
    setModalConfirmDeleteTaskVisible(false)
}
    return (
        <View style={styles.taskContainer}>
            <FlatList
                style={styles.flatlist}
                data={taskList}
                keyExtractor={task => task.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.renderItemContainer}>
                        <Text style={styles.taskText}>{item.value}</Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity
                                style={styles.editIconContainer}
                                onPress={handleEditTask}>
                                <MaterialIcons name="edit" size={24} color="white" style={styles.editIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.deleteIconContainer}
                                onPress={() => handleModalConfirmDeleteTask(item)}>
                                <MaterialIcons name="delete" size={24} color="white" style={styles.deleteIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            />
            <ModalConfirmDeleteTask
                modalConfirmDeleteTaskVisible={modalConfirmDeleteTaskVisible}
                taskSelected={taskSelected}
                handleCancelModalConfirmDeleteTask={handleCancelModalConfirmDeleteTask}
                handleDeletedTask={handleDeletedTask} />

        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 15,
        alignItems: 'center',
        width: '100%',

    },
    flatlist: {
        width: '100%',
    },
    renderItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#2a2c33',
        padding: 4,
        borderRadius: 6
    },
    taskText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 16
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 6
    },
    editIconContainer: {

    },
    editIcon: {

    },
    deleteIconContainer: {

    },
    deleteIcon: {

    },

})