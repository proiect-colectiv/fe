import { LocalStorageKeys } from "./interface";

export const setStorageValue = (key: LocalStorageKeys, value: string): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

export const getStorageValue = (key: LocalStorageKeys): string | undefined => {
    try {
        const storageValue = localStorage.getItem(key);

        if (!storageValue) {
            return undefined;
        }
        return JSON.parse(storageValue);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

export const removeStorageValue = (key: LocalStorageKeys): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}
