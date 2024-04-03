import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'

const ModalConfirmDeleteTask = ({ modalConfirmDeleteTaskVisible, taskSelected, handleDeletedTask, handleCancelModalConfirmDeleteTask }) => {
    return (
        <Modal
            visible={modalConfirmDeleteTaskVisible}
            animationType="slide"
            transparent={true}>
            <View style={styles.modalStyle}>
                <View style={styles.modalContainer}>
                    <View style={styles.textModalContainer}>
                        <Text style={styles.textModal}>¿Esta seguro que deseas eliminar?</Text>
                    </View>
                    <View style={styles.textModalContainer}>
                        <Text style={styles.textModal}>{taskSelected.value}</Text>
                    </View>
                    <View style={styles.buttonModalContainer}>
                        <Button title="Eliminar" onPress={handleDeletedTask} />
                        <Button title="Cancelar" onPress={handleCancelModalConfirmDeleteTask} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalConfirmDeleteTask

const styles = StyleSheet.create({
    modalStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#cccccc90"
    },
    modalContainer: {
        backgroundColor: "black",
        width: "80%",
        alignItems: 'center',
        gap: 20,
        paddingVertical: 20,
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 2
    },
    textModalContainer: {

    },
    textModal: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    buttonModalContainer: {
        flexDirection: 'row',
        gap: 30
    },
})