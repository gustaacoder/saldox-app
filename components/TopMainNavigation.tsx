import { Image, TouchableOpacity } from 'react-native';
import { ThemedView } from './themed-view';
import { IconSymbol } from './ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function TopMainNavigation() {
    return (
        <ThemedView style={{ height: 80, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image
                source={require('../assets/images/logo/saldox-logo-light.png')}
                style={{ left: -15, width: 100, height: 100 }} />
            <ThemedView style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginRight: 10 }}>
                <TouchableOpacity>
                    <IconSymbol size={40} name="person.circle.fill" color={Colors.dark.tint} />
                </TouchableOpacity>
            </ThemedView>
        </ThemedView>
    );
}