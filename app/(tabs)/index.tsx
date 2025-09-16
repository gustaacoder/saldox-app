import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopMainNavigation from '@/components/TopMainNavigation';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ height: "100%" }} edges={['top']}>
      <ThemedView style={{ height: "100%" }}>
        <TopMainNavigation />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  }
});
