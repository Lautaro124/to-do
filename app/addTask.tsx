import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Button, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import { View } from '@/components/Themed';
import { saveData, getData } from '@/config/storages';
import Times from '@/constants/time';
import { FontAwesome } from '@expo/vector-icons';

export default function ModalScreen() {
  const [taskName, setTaskName] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<string>('');
  const items: string[] = [
    Times.today,
    Times.weekly,
    Times.monthly,
  ];

  const onPress = async () => {
    console.log(taskName, selectedItem)
    if (!taskName || !selectedItem) return
    const tasks = await getData(selectedItem)
    if (tasks) {
      const newTasks = JSON.parse(tasks)
      newTasks.push({
        name: taskName,
        isCompleted: false,
      })
      const taskTojson = JSON.stringify(newTasks)
      saveData(selectedItem, taskTojson)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTaskName}
        placeholderTextColor='white'
        placeholder="Task name"
      />
      <ModalDropdown
        options={items}
        dropdownStyle={styles.dropDownModal}
        saveScrollPosition={false}
        scrollEnabled={true}
        onSelect={(index: any, value: string) => setSelectedItem(value)}
      >
        <View style={styles.dropDownButton}>
          <Text style={styles.dropDownText}>
            {selectedItem ? selectedItem : 'Select your automatized time'}
          </Text>
          <FontAwesome name="angle-down" size={20} color="white" />
        </View>
      </ModalDropdown>
      <View style={styles.submitButtonContainer}>
        <Button title="Add task" onPress={onPress} />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 15,
    color: 'white',
  },
  dropDownButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#333',
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
  dropDownText: {
    color: 'white',
  },
  dropDownModal: {
    width: 300,
  },
  submitButtonContainer: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  }
});
