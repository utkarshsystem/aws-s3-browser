const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_813b0e30._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__9efe335f._.js");
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
