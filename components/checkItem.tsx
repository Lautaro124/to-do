import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  name: string
  id: number
}

const CheckItem = ({ id, name }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.id}>Nº {id}</Text>
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
    padding: 15,
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
