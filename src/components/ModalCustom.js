import { StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'
import React from 'react'

const ModalCustom = ({modalCustomVisible, handleChangeText, taskItem, handleAddTask, handleCancelModal}) => {
    return (
        <Modal
            visible={modalCustomVisible}
            animationType="slide"
            transparent={true}>
            <View style={styles.modalStyle}>
                <View style={styles.modalContainer}>
                    <View style={styles.textModalContainer}>
                        <Text style={styles.textModal}>Ingrese una tarea</Text>
                    </View>
                    <TextInput
                        style={styles.textInputModal}
                        onChangeText={handleChangeText}
                        value={taskItem}
                        placeholder={"Comenzemos..."} />
                    <View style={styles.buttonModalContainer}>
                        <Button title="Añadir" onPress={handleAddTask} />
                        <Button title="Cancelar" onPress={handleCancelModal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalCustom

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
    textInputModal: {
        borderBottomWidth: 2,
        borderBottomColor: "red",
        backgroundColor: "white",
        width: '85%',
        fontSize: 16,
        borderRadius: 5

    },
    buttonModalContainer: {
        flexDirection: 'row',
        gap: 30
    },
})