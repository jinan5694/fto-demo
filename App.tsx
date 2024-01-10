import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider as PaperProvider, Button, Appbar } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type {
  NativeStackNavigationOptions,
  NativeStackScreenProps
} from '@react-navigation/native-stack'

import { ProfileScreen } from './src/pages/Profile'

export type RootStackParamList = {
  Home: undefined
  Details: { id: string; visible?: boolean }
  Profile: undefined
}
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Details', { id: '123', visible: false })}
      >
        Go to Details
      </Button>
    </View>
  )
}

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>

function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{route.params.id}</Text>
      <Button
        mode="contained"
        onPress={() => navigation.push('Details', { id: '345', visible: true })}
      >
        Go to Details ... again
      </Button>
      <Button mode="outlined" onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
        Go back
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Home')} style={{ marginTop: 10 }}>
        Go to Home
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Profile')}
        style={{ marginTop: 10 }}
      >
        Go to Profile
      </Button>
      <View style={{ marginTop: 10 }}>
        <Text>123</Text>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
  const screenOptions: NativeStackNavigationOptions = {
    headerBackVisible: true
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ id: 'qwer' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
