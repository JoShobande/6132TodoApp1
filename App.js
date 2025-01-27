import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');



  const addTask = () => {
    if (taskTitle.trim()) {
      const newTask = {
        id: Date.now().toString(),
        title: taskTitle,
        status: 'due',
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
    }
  };

  // Toggle Status 
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: task.status === 'due' ? 'done' : 'due' } : task
      )
    );
  };


  // Delete Task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>

      <TextInput
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Enter task title"
      />

      <Button
        title="Add Task"
        onPress={addTask}
        disabled={!taskTitle.trim()}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <View style={styles.actions}>
              <Switch
                value={item.status === 'done'}
                onValueChange={() => toggleStatus(item.id)}
                style={styles.switch}
              />
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
              <Icon name="delete" size={24} color="red" />
            </TouchableOpacity>  
          </View>
        )}
      />
    </View>
  );
}

