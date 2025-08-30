import { ConfigType } from '@/config/config.type';

const base_url =
  import.meta.env.VITE_DEBUG === 'False'
    ? import.meta.env.VITE_BASE_PROD_URL
    : import.meta.env.VITE_BASE_URL;

const CONFIG: ConfigType = {
  CRYPTO_KEY: import.meta.env.VITE_CRYPTO_KEY,
  CRYPTO_IV: import.meta.env.VITE_CRYPTO_IV,
  BASE_URL: base_url,
};

export { CONFIG };
