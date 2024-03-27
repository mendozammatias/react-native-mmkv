import type { Configuration } from './MMKV';
import type { NativeMMKV } from './Types';
import { getMMKVTurboModule } from './NativeMmkv';

const module = getMMKVTurboModule();

export const createMMKV = (config: Configuration): NativeMMKV => {
  const instance = module.createMMKV(config);
  if (__DEV__) {
    if (typeof instance !== 'object' || instance == null) {
      throw new Error(
        'Failed to create MMKV instance - an unknown object was returned by createMMKV(..)!'
      );
    }
  }
  return instance as NativeMMKV;
};
