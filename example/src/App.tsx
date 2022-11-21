import React, { useEffect } from 'react'
import RNSimpuLiveChatModule, {
  SimpuLiveChatProvider,
} from 'react-native-simpu-livechat'
import TriggerButton from './components/TriggerButton'

const App = () => {
  useEffect(() => {
    console.log(RNSimpuLiveChatModule)
  })

  return (
    <SimpuLiveChatProvider>
      <TriggerButton />
    </SimpuLiveChatProvider>
  )
}

export default App
