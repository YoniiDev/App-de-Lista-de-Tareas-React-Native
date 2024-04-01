import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { useState } from "react";
import ModalCustom from './src/components/ModalCustom';
import Header from './src/components/Header';
import ItemList from './src/components/ItemList';
export default function App() {

  const [taskItem, setTaskItem] = useState("")
  const [taskList, setTaskList] = useState([])
  const [modalCustomVisible, setModalCustomVisible] = useState(false)

  const handleOpenModal = () => {
    setModalCustomVisible(true)
  }

  const handleChangeText = (e) => setTaskItem(e)


  const handleAddTask = () => {
    setTaskList(currentValue => [
      ...currentValue,
      { id: Math.random().toString(), value: taskItem }
    ])
    setTaskItem("")
  }

  const handleCancelModal = () => {
    setModalCustomVisible(false)
  }

  return (
    <View style={styles.container}>
      <Header 
      handleOpenModal={handleOpenModal}/>
      <ModalCustom
        modalCustomVisible={modalCustomVisible}
        handleChangeText={handleChangeText}
        taskItem={taskItem}
        handleAddTask={handleAddTask}
        handleCancelModal={handleCancelModal} 
        />
      <ItemList
      taskList={taskList}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE0930',
    paddingTop: 30,
    paddingHorizontal: 10
  }
});
