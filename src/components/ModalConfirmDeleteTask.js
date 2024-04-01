import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'

const ModalConfirmDeleteTask = ({modalConfirmDeleteTaskVisible}) => {
    return (
        <Modal
            visible={modalConfirmDeleteTaskVisible}
            animationType="slide"
            transparent={true}>
                <View>
                    <Text>Hola Soy un Modal</Text>


                </View>
        </Modal>
    )
}

export default ModalConfirmDeleteTask

const styles = StyleSheet.create({

})