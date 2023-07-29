import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import { Text, View } from '@/components/Themed';
import CheckItem from '@/components/checkItem';
import Times from '@/constants/time';
import { getData } from '@/config/storages';
import { Task } from '@/interfaces/task';

export default function TabOneScreen() {
  const [tasks, setTask] = useState<Task[]>([])
  const getTasks = async () => {
    const data = await getData(Times.today)
    if (!data) return []
    const parsedData: Task[] = JSON.parse(data)
    console.log(parsedData)
    return parsedData
  }
  useEffect(() => {
    getTasks().then((data) => {
      return setTask(data);
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>To do now</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.listContainer}>
          {
            tasks.map((task, index) => (
              <CheckItem name={task.name ?? ''} id={index + 1} />
            ))
          }
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Completed</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.listContainer}>
          <CheckItem name="test" id={1} />
          <CheckItem name="test" id={2} />
          <CheckItem name="test" id={3} />
          <CheckItem name="test" id={4} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    flex: 2,
    width: '100%',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
