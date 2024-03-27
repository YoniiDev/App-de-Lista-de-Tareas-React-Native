import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { useState } from "react";
export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleChangeText = () => {

  }

  const handleAddTask = () => {

  }

  const handleCancelModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
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
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}>
        <View>
          <View>
            <Text>Ingrese una tarea</Text>
          </View>
        </View>
        <View>
          <TextInput
            // style={styles}
            onChangeText={handleChangeText}
            // value={textItem}
            placeholder={"Comenzemos..."}
          />
        </View>
        <View>
          <Button title="Añadir" onPress={handleAddTask} />
          <Button title="Cancelar" onPress={handleCancelModal} />
        </View>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE0930',
    paddingTop: 30,
    paddingHorizontal: 10
  },
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
  }
});
