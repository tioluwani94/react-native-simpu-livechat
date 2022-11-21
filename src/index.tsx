import 'react-native-gesture-handler'

import { NativeModules } from 'react-native'

import { SimpuLiveChatProvider, useSimpuLiveChat } from './components/Provider'

import SimpuLiveChatWidget from './components/Widget'

export { SimpuLiveChatProvider, useSimpuLiveChat, SimpuLiveChatWidget }

export default NativeModules.RNSimpuLiveChatModule
