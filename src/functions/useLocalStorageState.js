import { useState, useEffect } from "react";

export function useLocalStorageState(key, defaultValue) {
  const [localStorageState, setLocalStorageState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageState));
  }, [key, localStorageState]);

  return [localStorageState, setLocalStorageState];
}
