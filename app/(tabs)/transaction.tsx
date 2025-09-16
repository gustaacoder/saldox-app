import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TransactionScreen() {
  return (
    <SafeAreaView>
        <ThemedView>
            <ThemedText>Transaction</ThemedText>
        </ThemedView>
    </SafeAreaView>
  );
}