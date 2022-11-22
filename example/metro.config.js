/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path')
const exclusionList = require('metro-config/src/defaults/exclusionList')

const moduleRoot = path.resolve(__dirname, '..')

module.exports = {
  watchFolders: [moduleRoot],
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      'react-native-gesture-handler': path.resolve(
        __dirname,
        'node_modules/react-native-gesture-handler'
      ),
      'react-native-reanimated': path.resolve(
        __dirname,
        'node_modules/react-native-reanimated'
      ),
      '@react-navigation/native': path.resolve(
        __dirname,
        'node_modules/@react-navigation/native'
      ),
      '@react-navigation/native-stack': path.resolve(
        __dirname,
        'node_modules/@react-navigation/native-stack'
      ),
      'react-native-safe-area-context': path.resolve(
        __dirname,
        'node_modules/react-native-safe-area-context'
      ),
      'react-native-screens': path.resolve(
        __dirname,
        'node_modules/react-native-screens'
      ),
    },
    blockList: exclusionList([
      new RegExp(`${moduleRoot}/node_modules/react/.*`),
      new RegExp(`${moduleRoot}/node_modules/react-native/.*`),
      new RegExp(`${moduleRoot}/node_modules/react-native-gesture-handler/.*`),
      new RegExp(`${moduleRoot}/node_modules/react-native-reanimated/.*`),
      new RegExp(`${moduleRoot}/node_modules/@react-navigation/native/.*`),
      new RegExp(
        `${moduleRoot}/node_modules/@react-navigation/native-stack/.*`
      ),
      new RegExp(`${moduleRoot}/node_modules/react-native-screens/.*`),
      new RegExp(
        `${moduleRoot}/node_modules/react-native-safe-area-context/.*`
      ),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}
