import * as MMKV from 'react-native-mmkv';
import type { StorageEngine } from 'foca';

const createMmkvStorage = (opts: MMKV.MMKVConfiguration): StorageEngine => {
  const mmkv = new MMKV.MMKV(opts);

  return {
    getItem: (key) => {
      return mmkv.getString(key) ?? null;
    },
    setItem: (key, value) => {
      mmkv.set(key, value);
    },
    removeItem: (key) => {
      mmkv.delete(key);
    },
    clear: () => {
      mmkv.clearAll();
    },
  };
};

export const mmkvStorage = createMmkvStorage({
  id: 'foca-storage',
});
