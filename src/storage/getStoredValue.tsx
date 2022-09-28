import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getStoredValue(key: string): Promise<string | null> {
    const value = await AsyncStorage.getItem(key);
    return value ? value : null;
}
