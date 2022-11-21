import React, { useEffect } from 'react'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RNSimpuLiveChatModule, {
  SimpuLiveChatProvider,
  SimpuLiveChatWidget,
} from 'react-native-simpu-livechat'
import TriggerButton from './components/TriggerButton'

const App = () => {
  useEffect(() => {
    console.log(RNSimpuLiveChatModule)
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SimpuLiveChatProvider>
        <TriggerButton />
      </SimpuLiveChatProvider>
    </GestureHandlerRootView>
  )
}

export default App
