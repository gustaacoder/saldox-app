import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
    return (
        <SafeAreaView>
            <ThemedView>
                <ThemedText>Dashboard</ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
}