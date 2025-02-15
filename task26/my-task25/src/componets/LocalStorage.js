export const  LocalStorage= ()  => {
    const  key = "appState";

   const getLocalStorage = () => {
        const data = localStorage.getItem(LocalStorage.key);
        return data ? JSON.parse(data) : null;
    }

    const setLocalStorage = (newValue) => {
        localStorage.setItem(LocalStorage.key, JSON.stringify(newValue));
    }

    const clearLocalStorage = () => {
        localStorage.removeItem(LocalStorage.key);
    }
}
