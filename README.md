# foca-mmkv-storage

react-native 端的持久化引擎，基于 [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)

[![License](https://img.shields.io/github/license/foca-js/foca-mmkv-storage?logo=open-source-initiative)](https://github.com/foca-js/foca-mmkv-storage/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/foca-mmkv-storage?logo=npm)](https://www.npmjs.com/package/foca-mmkv-storage)

# 安装

```bash
# pnpm
pnpm add foca-mmkv-storage
cd ios && pod install
```

# 使用

```diff
import { store } from 'foca';
+import { mmkvStorage } from 'foca-mmkv-storage';

store.init({
  persist: [
    {
      key: 'my-project',
      version: '1',
+     engine: mmkvStorage,
      models: [],
    },
  ],
});
```

也可以定制参数

```diff
import { store } from 'foca';
+import { createMmkvStorage } from 'foca-mmkv-storage';

store.init({
  persist: [
    {
      key: 'my-project',
      version: '1',
+     engine: createMmkvStorage({...}),
      models: [],
    },
  ],
});
```
