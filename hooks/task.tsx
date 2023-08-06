import { useEffect, useState } from 'react'
import { Task } from '@/interfaces/task'
import { getData } from '@/config/storages'
import Times from '@/constants/time'

const useTask = (time: Times) => {
  const [tasks, setTask] = useState<Task[]>([])

  useEffect(() => {
    getData(time)
      .then(data => {
        if (!data) return
        const parsedData: Task[] = JSON.parse(data)
        setTask(parsedData)
      })
      .catch(err => console.log(err))
  }, [])

  const addTask = (name: string) => {
    const newTasks = tasks.concat({
      name: name,
      isCompleted: false
    })

    setTask(newTasks)
  }

  const completeTask = (name: string) => {
    const newTasks = tasks.map(task => {
      if (task.name === name) {
        return {
          name: task.name,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTask(newTasks)
  }

  const getOnlyCompletedTask = () => {
    return tasks.filter(task => task.isCompleted)
  }

  const getNotCompletedTask = () => {
    return tasks.filter(tasks => !tasks.isCompleted)
  }

  return {
    tasks,
    addTask,
    completeTask,
    getOnlyCompletedTask,
    getNotCompletedTask,
  }
}

export default useTask