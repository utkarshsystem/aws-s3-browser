/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AWS_ACCOUNT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
