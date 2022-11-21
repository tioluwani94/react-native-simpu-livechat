import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import React, { ReactNode, useCallback, useMemo, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import createContext from '../utils/create-context'

type ContextValue = { show: () => void; hide: () => void }

const [Provider, useSimpuLiveChat] = createContext<ContextValue>()

const SimpuLiveChatProvider = (props: { children: ReactNode }) => {
  const { children } = props

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const snapPoints = useMemo(() => ['0%', '90%'], [])

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
        <BottomSheetModalProvider>
          <BottomSheetModal
            index={1}
            snapPoints={snapPoints}
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
          >
            <View style={styles.modalContentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      {children}
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
