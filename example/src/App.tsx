import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SimpuLiveChatProvider } from 'react-native-simpu-livechat'
import AboutScreen from './screens/About'
import HomeScreen from './screens/Home'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SimpuLiveChatProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='About' component={AboutScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SimpuLiveChatProvider>
    </GestureHandlerRootView>
  )
}

export default App
