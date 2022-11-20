import React, { useEffect } from 'react'
import RNSimpuLiveChatModule, { Counter } from 'react-native-simpu-livechat'

const App = () => {
  useEffect(() => {
    console.log(RNSimpuLiveChatModule)
  })

  return <Counter />
}

export default App
