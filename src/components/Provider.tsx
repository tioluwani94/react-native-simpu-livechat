import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { ReactNode, useCallback, useMemo, useRef } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import HomeScreen from '../screen/Home'
import createContext from '../utils/create-context'
import CustomBackdrop from './CustomBackdrop'

type ContextValue = { show: () => void; hide: () => void }

const [Provider, useSimpuLiveChat] = createContext<ContextValue>()

const SimpuLiveChatProvider = (props: { children: ReactNode }) => {
  const { children } = props

  const Stack = createNativeStackNavigator()

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const snapPoints = useMemo(() => ['25%', '98%'], [])

  const show = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const hide = useCallback(() => {
    bottomSheetModalRef.current?.dismiss()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const value = useMemo(
    () => ({ show, hide, bottomSheetModalRef }),
    [show, hide, bottomSheetModalRef]
  )

  return (
    <Provider value={value}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {children}
        <BottomSheetModalProvider>
          <BottomSheetModal
            index={1}
            snapPoints={snapPoints}
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            // handleComponent={null}
            backgroundStyle={{
              flex: 1,
            }}
            style={{ flex: 1 }}
            backdropComponent={CustomBackdrop}
          >
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name='Home'
                  component={HomeScreen}
                ></Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  modalContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export { SimpuLiveChatProvider, useSimpuLiveChat }
