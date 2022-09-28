import AsyncStorage from '@react-native-async-storage/async-storage';

export async function removeStoredValue(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
}
