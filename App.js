import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AxiosProvider } from '@/providers/AxiosProvider';
import AppNavigator from '@/navigation/AppNavigator';

export default function App() {
  return (
    <AxiosProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent={true}
        />
        <AppNavigator />
      </SafeAreaView>
    </AxiosProvider>
  );
}
