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
                <View style={styles.textModalContainer}>
                    <Text style={styles.textModal}>¿Esta seguro que desea eliminar?</Text>
                </View>
                <View>
                    <Text>{taskSelected.value}</Text>
                </View>
                <View>
                    <Button title="Eliminar" onPress={handleDeletedTask} />
                    <Button title="Cancelar" onPress={handleCancelModalConfirmDeleteTask} />
                </View>
            </View>
        </Modal>
    )
}

export default ModalConfirmDeleteTask

const styles = StyleSheet.create({

})