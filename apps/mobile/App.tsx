import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <View className="flex-1 bg-zinc-900 items-center justify-center">
      <Text className="text-white text-4xl font-bold">Hello World</Text>
      <StatusBar style="light" />
    </View>
  )
}
