import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import CheckItem from '@/components/checkItem';
import useTask from '@/hooks/task';
import Times from '@/constants/time';

export default function TabOneScreen() {
  const { completeTask, getNotCompletedTask, getOnlyCompletedTask } = useTask(Times.today)

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>To do now</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.listContainer}>
          {getNotCompletedTask().map((task, index) => (
              <CheckItem
                key={index}
                name={task.name ?? ''}
                isComplete={task.isCompleted}
                completTask={completeTask}
              />
            ))}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Completed</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.listContainer}>
          {getOnlyCompletedTask().map((task, index) => (
            <CheckItem
              key={index}
              name={task.name ?? ''}
              isComplete={task.isCompleted}
              completTask={completeTask}
            />
          ))}
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
    padding: 10,
    paddingHorizontal: 15
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
