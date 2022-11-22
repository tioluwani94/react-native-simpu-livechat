import React from 'react'
import { Text, View } from 'react-native'
import TriggerButton from '../components/TriggerButton'

const AboutScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>About</Text>
      <TriggerButton />
    </View>
  )
}

export default AboutScreen
