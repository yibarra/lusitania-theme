import { useState, useCallback } from 'react';
import { differenceInMinutes } from 'date-fns';

// Hook
function UseLocalStorage (key: string, initialValue: any) {
  // state initial
  const [ localStorageItem, setLocalStorageItem ] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // check date
  const checkHours = useCallback(date => differenceInMinutes(Date.now(), date), []);

  // set value
  const setValue = useCallback((key: string, value: any, setLocal: any) => {
    return new Promise((resolve, reject) => {
      try {
        setLocal(value);
        window.localStorage.setItem(key, JSON.stringify(value));
  
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  }, []);

  // set value function
  const setValueFunction = useCallback(value => setLocalStorageItem(value), [ setLocalStorageItem ]);

  return { checkHours, localStorageItem, setValueFunction, setValue };
}

export default UseLocalStorage;