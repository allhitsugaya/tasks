export class LocalStorage {
    static key = "appState";

    static getLocalStorage() {
        const data = localStorage.getItem(LocalStorage.key);
        return data ? JSON.parse(data) : null;
    }

    static setLocalStorage(newValue) {
        localStorage.setItem(LocalStorage.key, JSON.stringify(newValue));
    }

    static clearLocalStorage() {
        localStorage.removeItem(LocalStorage.key);
    }
}
