import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeValue(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
}
