import React from 'react'
import { Text, View } from 'react-native'
import TriggerButton from '../components/TriggerButton'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      <TriggerButton />
    </View>
  )
}

export default HomeScreen
