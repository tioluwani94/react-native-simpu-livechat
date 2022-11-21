import * as React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useSimpuLiveChat } from 'react-native-simpu-livechat'

const TriggerButton = () => {
  const { show } = useSimpuLiveChat()

  return (
    <View style={styles.container}>
      <Button onPress={() => show()} title='Press Me' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})

export default TriggerButton
