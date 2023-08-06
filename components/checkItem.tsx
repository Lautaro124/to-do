import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  name: string
  isComplete: boolean
  completTask: (value: string) => void
}

const CheckItem = ({ name, isComplete, completTask }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { completTask(name) }}>
        <View style={styles.checkBoxContainer}>
          <FontAwesome 
            name={isComplete ?  'check-square' : 'square-o'} 
            color={isComplete ? 'green' : 'white'}
            size={23} 
          />
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.tashContainer}>
          {!isComplete && 
            (<FontAwesome name='trash-o' color='white' size={20}/>)}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    width: 300,
    paddingVertical: 10
  },
  tashContainer: {
    width: 30,
    paddingVertical: 10
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  id: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
})


export default CheckItem
