import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import React, { ReactNode, useCallback, useMemo, useRef } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import CustomBackdrop from './CustomBackdrop'

const SimpuLiveChatWidget = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const snapPoints = useMemo(() => ['25%', '50%', '100%'], [])

  const show = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const hide = useCallback(() => {
    bottomSheetModalRef.current?.dismiss()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Button onPress={() => show()} title='Show Modal' />
        <BottomSheetModalProvider>
          <BottomSheetModal
            index={1}
            snapPoints={snapPoints}
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            backgroundStyle={{
              flex: 1,
            }}
            style={{ flex: 1 }}
            backdropComponent={CustomBackdrop}
          >
            <View style={styles.modalContentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({
  modalContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default SimpuLiveChatWidget
